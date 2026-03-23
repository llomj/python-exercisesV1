// --- LEVEL 10 EXPERT A: Logging, Testing (unittest, assert), Error Handling Patterns — 49 TRULY UNIQUE QUESTIONS ---
export const level10ExpertA = [
  // ===== LOGGING MODULE (1–15) =====

  // Q1: Number of standard logging levels
  (_i: number) => ({
    q: `import logging\n\nHow many standard logging levels does the logging module have?`,
    o: ["5", "4", "6", "3"],
    c: 0,
    e: "The 5 standard levels are DEBUG, INFO, WARNING, ERROR, and CRITICAL.",
    de: `Python's logging module defines exactly 5 standard logging levels, each with a numeric value. They are, from lowest to highest severity: DEBUG (10), INFO (20), WARNING (30), ERROR (40), and CRITICAL (50). These levels allow developers to categorize log messages by severity and filter output accordingly.

Key concepts:
• DEBUG (10) — detailed diagnostic information
• INFO (20) — confirmation that things are working
• WARNING (30) — something unexpected happened, but the software still works
• ERROR (40) — a serious problem, some function failed
• CRITICAL (50) — a very serious error, program may not continue

How it works:
• Each level has a numeric value (multiples of 10)
• Setting a level filters out messages below that severity
• Custom levels can be added but these 5 are standard
• The default level is WARNING

Example:
>>> import logging
>>> logging.DEBUG
10
>>> logging.INFO
20
>>> logging.WARNING
30
>>> logging.ERROR
40
>>> logging.CRITICAL
50

Common uses:
• DEBUG for development diagnostics
• INFO for runtime confirmations
• WARNING for recoverable issues
• ERROR for failures
• CRITICAL for fatal problems

Key Concepts:
• Key concepts: • DEBUG (10) — detailed diagnostic information • INFO (20) — confirmation that things are working • WARNING (30) — something unexpected happened, but the software still works • ERROR (40) — a serious problem, some function failed • CRITICAL (50) — a very serious error, program may not continue How it works: • Each level has a numeric value (multiples of 10) • Setting a level filters out messages below that severity • Custom levels can be added but these 5 are standard • The default level is WARNING Example: >>> import logging >>> logging.DEBUG 10 >>> logging.INFO 20 >>> logging.WARNING 30 >>> logging.ERROR 40 >>> logging.CRITICAL 50 Common uses: • DEBUG for development diagnostics • INFO for runtime confirmations • WARNING for recoverable issues • ERROR for failures • CRITICAL for fatal problems

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q2: Default logging level
  (_i: number) => ({
    q: `import logging\n\nWhat is the default logging level?`,
    o: ["WARNING", "DEBUG", "INFO", "ERROR"],
    c: 0,
    e: "The default level is WARNING — only WARNING and above are shown.",
    de: `By default, the logging module is set to WARNING level. This means only messages at WARNING, ERROR, and CRITICAL severity are displayed. DEBUG and INFO messages are silently ignored unless you explicitly configure a lower level.

Key concepts:
• Default level is WARNING (numeric value 30)
• Messages below WARNING are suppressed by default
• This is why logging.debug() and logging.info() produce no output without configuration
• Use logging.basicConfig(level=logging.DEBUG) to see all messages

How it works:
• When you call logging.warning("msg"), it appears
• When you call logging.info("msg"), nothing happens (below threshold)
• When you call logging.debug("msg"), nothing happens (below threshold)
• You must configure the level to see lower-severity messages

Example:
>>> import logging
>>> logging.warning("This appears")
WARNING:root:This appears
>>> logging.info("This is hidden")
>>> logging.debug("This is also hidden")

Common uses:
• Production systems typically use WARNING or ERROR
• Development uses DEBUG to see everything
• Testing often uses INFO for moderate verbosity

Key Concepts:
• Key concepts: • Default level is WARNING (numeric value 30) • Messages below WARNING are suppressed by default • This is why logging.debug() and logging.info() produce no output without configuration • Use logging.basicConfig(level=logging.DEBUG) to see all messages How it works: • When you call logging.warning("msg"), it appears • When you call logging.info("msg"), nothing happens (below threshold) • When you call logging.debug("msg"), nothing happens (below threshold) • You must configure the level to see lower-severity messages Example: >>> import logging >>> logging.warning("This appears") WARNING:root:This appears >>> logging.info("This is hidden") >>> logging.debug("This is also hidden") Common uses: • Production systems typically use WARNING or ERROR • Development uses DEBUG to see everything • Testing often uses INFO for moderate verbosity

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q3: logging.DEBUG numeric value
  (_i: number) => ({
    q: `import logging\nprint(logging.DEBUG)`,
    o: ["10", "0", "1", "20"],
    c: 0,
    e: "logging.DEBUG has the numeric value 10.",
    de: `Each logging level in Python has a corresponding integer value. DEBUG is the lowest standard level with a numeric value of 10. These numeric values determine the severity hierarchy and are used internally to compare and filter messages.

Key concepts:
• logging.DEBUG = 10
• Lowest of the 5 standard levels
• Used for detailed diagnostic information
• Messages at this level are typically only useful during development

How it works:
• Levels are compared numerically: DEBUG(10) < INFO(20) < WARNING(30) < ERROR(40) < CRITICAL(50)
• When a logger's level is set to X, only messages with level >= X are processed
• Setting level to DEBUG shows all standard messages

Example:
>>> import logging
>>> logging.DEBUG
10
>>> logging.getLevelName(10)
'DEBUG'
>>> logging.getLevelName('DEBUG')
10

Key Concepts:
• Key concepts: • logging.DEBUG = 10 • Lowest of the 5 standard levels • Used for detailed diagnostic information • Messages at this level are typically only useful during development How it works: • Levels are compared numerically: DEBUG(10) < INFO(20) < WARNING(30) < ERROR(40) < CRITICAL(50) • When a logger's level is set to X, only messages with level >= X are processed • Setting level to DEBUG shows all standard messages Example: >>> import logging >>> logging.DEBUG 10 >>> logging.getLevelName(10) 'DEBUG' >>> logging.getLevelName('DEBUG') 10

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q4: logging.INFO numeric value
  (_i: number) => ({
    q: `import logging\nprint(logging.INFO)`,
    o: ["20", "10", "30", "2"],
    c: 0,
    e: "logging.INFO has the numeric value 20.",
    de: `logging.INFO is the second-lowest standard logging level with a numeric value of 20. It is used for general informational messages that confirm the program is working as expected.

Key concepts:
• logging.INFO = 20
• Second level above DEBUG
• Used for confirmation that things are working as expected
• Not shown by default (default level is WARNING = 30)

How it works:
• INFO messages are suppressed by default
• To see INFO messages: logging.basicConfig(level=logging.INFO)
• INFO is appropriate for tracking program flow in normal operation

Example:
>>> import logging
>>> logging.INFO
20
>>> logging.basicConfig(level=logging.INFO)
>>> logging.info("Server started")
INFO:root:Server started

Key Concepts:
• Key concepts: • logging.INFO = 20 • Second level above DEBUG • Used for confirmation that things are working as expected • Not shown by default (default level is WARNING = 30) How it works: • INFO messages are suppressed by default • To see INFO messages: logging.basicConfig(level=logging.INFO) • INFO is appropriate for tracking program flow in normal operation Example: >>> import logging >>> logging.INFO 20 >>> logging.basicConfig(level=logging.INFO) >>> logging.info("Server started") INFO:root:Server started

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q5: logging.WARNING numeric value
  (_i: number) => ({
    q: `import logging\nprint(logging.WARNING)`,
    o: ["30", "20", "40", "3"],
    c: 0,
    e: "logging.WARNING has the numeric value 30.",
    de: `logging.WARNING has a numeric value of 30 and is the default logging level. It indicates something unexpected happened or a potential problem, but the program can still continue operating.

Key concepts:
• logging.WARNING = 30
• This is the default level — messages at WARNING and above are shown
• Indicates something unexpected or potentially harmful
• Program still functions despite the warning

How it works:
• WARNING messages are shown by default (no configuration needed)
• Signals issues that should be investigated but are not critical
• Commonly used for deprecation notices, resource usage alerts

Example:
>>> import logging
>>> logging.WARNING
30
>>> logging.warning("Disk space low")
WARNING:root:Disk space low

Key Concepts:
• Key concepts: • logging.WARNING = 30 • This is the default level — messages at WARNING and above are shown • Indicates something unexpected or potentially harmful • Program still functions despite the warning How it works: • WARNING messages are shown by default (no configuration needed) • Signals issues that should be investigated but are not critical • Commonly used for deprecation notices, resource usage alerts Example: >>> import logging >>> logging.WARNING 30 >>> logging.warning("Disk space low") WARNING:root:Disk space low

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q6: logging.ERROR numeric value
  (_i: number) => ({
    q: `import logging\nprint(logging.ERROR)`,
    o: ["40", "30", "50", "4"],
    c: 0,
    e: "logging.ERROR has the numeric value 40.",
    de: `logging.ERROR has a numeric value of 40. It indicates a more serious problem — the software has not been able to perform some function.

Key concepts:
• logging.ERROR = 40
• Second-highest standard level
• Indicates a significant problem that prevented a function from completing
• Program may still run, but something definitely failed

How it works:
• ERROR messages indicate failure of a specific operation
• Always shown at default level (40 >= 30)
• Used when catching exceptions that prevent normal operation

Example:
>>> import logging
>>> logging.ERROR
40
>>> logging.error("Database connection failed")
ERROR:root:Database connection failed

Key Concepts:
• Key concepts: • logging.ERROR = 40 • Second-highest standard level • Indicates a significant problem that prevented a function from completing • Program may still run, but something definitely failed How it works: • ERROR messages indicate failure of a specific operation • Always shown at default level (40 >= 30) • Used when catching exceptions that prevent normal operation Example: >>> import logging >>> logging.ERROR 40 >>> logging.error("Database connection failed") ERROR:root:Database connection failed

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q7: logging.CRITICAL numeric value
  (_i: number) => ({
    q: `import logging\nprint(logging.CRITICAL)`,
    o: ["50", "40", "100", "5"],
    c: 0,
    e: "logging.CRITICAL has the numeric value 50.",
    de: `logging.CRITICAL has a numeric value of 50 and is the highest standard logging level. It indicates a very serious error that may prevent the program from continuing to run.

Key concepts:
• logging.CRITICAL = 50
• Highest standard logging level
• Indicates a fatal error — the program may not be able to continue
• Reserved for the most severe issues

How it works:
• CRITICAL messages indicate the program itself may be unable to continue
• Always displayed regardless of configured level (unless logging is disabled entirely)
• Used for system-level failures, unrecoverable errors

Example:
>>> import logging
>>> logging.CRITICAL
50
>>> logging.critical("System out of memory")
CRITICAL:root:System out of memory

Key Concepts:
• Key concepts: • logging.CRITICAL = 50 • Highest standard logging level • Indicates a fatal error — the program may not be able to continue • Reserved for the most severe issues How it works: • CRITICAL messages indicate the program itself may be unable to continue • Always displayed regardless of configured level (unless logging is disabled entirely) • Used for system-level failures, unrecoverable errors Example: >>> import logging >>> logging.CRITICAL 50 >>> logging.critical("System out of memory") CRITICAL:root:System out of memory

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q8: basicConfig sets root logger
  (_i: number) => ({
    q: `import logging\nlogging.basicConfig(level=logging.DEBUG)\n\nWhat does this do?`,
    o: ["Sets the root logger to show DEBUG and above", "Creates a new logger", "Disables logging", "Sets level to WARNING"],
    c: 0,
    e: "basicConfig configures the root logger to display DEBUG and all higher-level messages.",
    de: `logging.basicConfig() is a convenience function that configures the root logger. When called with level=logging.DEBUG, it sets the minimum severity threshold to DEBUG (10), meaning all standard log messages (DEBUG, INFO, WARNING, ERROR, CRITICAL) will be displayed.

Key concepts:
• basicConfig configures the root logger (the top-level logger)
• level=logging.DEBUG sets the threshold to 10
• All messages with level >= 10 will be shown
• Can only effectively be called once (subsequent calls are ignored if handlers exist)

How it works:
• Sets the root logger's level to DEBUG
• Adds a StreamHandler (console output) if none exists
• After this call, logging.debug("msg") will produce output
• Without this call, debug/info messages are suppressed

Example:
>>> import logging
>>> logging.basicConfig(level=logging.DEBUG)
>>> logging.debug("Now visible!")
DEBUG:root:Now visible!
>>> logging.info("Also visible!")
INFO:root:Also visible!

Common uses:
• Quick setup for development
• Accepts format, filename, filemode, datefmt parameters
• logging.basicConfig(filename='app.log', level=logging.DEBUG)

Key Concepts:
• Common uses: • Quick setup for development • Accepts format, filename, filemode, datefmt parameters • logging.basicConfig(filename='app.log', level=logging.DEBUG)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q9: What does a Handler do?
  (_i: number) => ({
    q: `In the logging module, what does a Handler do?`,
    o: ["Sends log records to a destination", "Formats the log message", "Filters log records", "Creates the logger"],
    c: 0,
    e: "A Handler sends log records to a destination like the console or a file.",
    de: `A logging Handler is responsible for dispatching log records to their final destination. Different handler types send records to different outputs — the console, files, network sockets, email, etc.

Key concepts:
• Handlers determine WHERE log messages go
• StreamHandler sends to console (stdout/stderr)
• FileHandler sends to a file
• Multiple handlers can be attached to one logger
• Each handler can have its own level and formatter

How it works:
• Logger creates a LogRecord
• LogRecord is passed to all attached handlers
• Each handler checks its own level filter
• If the record passes, the handler formats and emits it

Example:
>>> import logging
>>> logger = logging.getLogger('myapp')
>>> console_handler = logging.StreamHandler()
>>> file_handler = logging.FileHandler('app.log')
>>> logger.addHandler(console_handler)
>>> logger.addHandler(file_handler)

Common handler types:
• StreamHandler — console output
• FileHandler — write to file
• RotatingFileHandler — file with size-based rotation
• SMTPHandler — send email alerts
• SocketHandler — send over network

Key Concepts:
• Key concepts: • Handlers determine WHERE log messages go • StreamHandler sends to console (stdout/stderr) • FileHandler sends to a file • Multiple handlers can be attached to one logger • Each handler can have its own level and formatter How it works: • Logger creates a LogRecord • LogRecord is passed to all attached handlers • Each handler checks its own level filter • If the record passes, the handler formats and emits it Example: >>> import logging >>> logger = logging.getLogger('myapp') >>> console_handler = logging.StreamHandler() >>> file_handler = logging.FileHandler('app.log') >>> logger.addHandler(console_handler) >>> logger.addHandler(file_handler) Common handler types: • StreamHandler — console output • FileHandler — write to file • RotatingFileHandler — file with size-based rotation • SMTPHandler — send email alerts • SocketHandler — send over network

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q10: What does a Formatter do?
  (_i: number) => ({
    q: `In the logging module, what does a Formatter do?`,
    o: ["Specifies the layout of log records", "Sends logs to a file", "Filters log records by level", "Creates new loggers"],
    c: 0,
    e: "A Formatter specifies the layout/format of log record output.",
    de: `A logging Formatter defines the structure and content of the final log output string. It determines what information is included (timestamp, level, message, module name, etc.) and how it is arranged.

Key concepts:
• Formatters determine HOW log messages look
• Applied to handlers, not loggers directly
• Use format strings with special LogRecord attributes
• Common attributes: %(asctime)s, %(levelname)s, %(message)s, %(name)s

How it works:
• Create a Formatter with a format string
• Attach the Formatter to a Handler
• When the handler emits a record, the formatter produces the final string

Example:
>>> import logging
>>> formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
>>> handler = logging.StreamHandler()
>>> handler.setFormatter(formatter)
>>> logger = logging.getLogger('myapp')
>>> logger.addHandler(handler)
>>> logger.warning("Test")
2024-01-15 10:30:00,123 - myapp - WARNING - Test

Common format attributes:
• %(asctime)s — human-readable timestamp
• %(levelname)s — level name (DEBUG, INFO, etc.)
• %(message)s — the log message
• %(name)s — logger name
• %(filename)s — source file name
• %(lineno)d — line number

Key Concepts:
• Key concepts: • Formatters determine HOW log messages look • Applied to handlers, not loggers directly • Use format strings with special LogRecord attributes • Common attributes: %(asctime)s, %(levelname)s, %(message)s, %(name)s How it works: • Create a Formatter with a format string • Attach the Formatter to a Handler • When the handler emits a record, the formatter produces the final string Example: >>> import logging >>> formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s') >>> handler = logging.StreamHandler() >>> handler.setFormatter(formatter) >>> logger = logging.getLogger('myapp') >>> logger.addHandler(handler) >>> logger.warning("Test") 2024-01-15 10:30:00,123 - myapp - WARNING - Test Common format attributes: • %(asctime)s — human-readable timestamp • %(levelname)s — level name (DEBUG, INFO, etc.) • %(message)s — the log message • %(name)s — logger name • %(filename)s — source file name • %(lineno)d — line number

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q11: getLogger(__name__) purpose
  (_i: number) => ({
    q: `logging.getLogger(__name__)\n\nWhy use __name__ as the logger name?`,
    o: ["Creates a logger named after the module for hierarchical logging", "It runs faster", "It is required by Python", "It prevents errors"],
    c: 0,
    e: "Using __name__ creates a module-specific logger that supports hierarchical logging.",
    de: `Using __name__ as the logger name creates a logger that is named after the current module (e.g., 'mypackage.mymodule'). This enables hierarchical logging where child loggers inherit settings from parent loggers based on the dot-separated naming convention.

Key concepts:
• __name__ is the module's fully qualified name (e.g., 'mypackage.utils')
• Logger names use dot notation for hierarchy: 'a.b' is a child of 'a'
• Child loggers propagate messages to parent loggers
• The root logger is the ancestor of all loggers

How it works:
• In mypackage/utils.py, __name__ is 'mypackage.utils'
• logging.getLogger('mypackage.utils') creates a logger in the hierarchy
• Settings on 'mypackage' logger apply to all 'mypackage.*' loggers
• This allows configuring logging per-package or per-module

Example:
# In mypackage/utils.py
import logging
logger = logging.getLogger(__name__)  # logger named 'mypackage.utils'
logger.info("Processing data")

# Configure at package level
pkg_logger = logging.getLogger('mypackage')
pkg_logger.setLevel(logging.DEBUG)  # Affects all mypackage.* loggers

Common uses:
• Best practice for library and application logging
• Enables per-module log configuration
• Makes log output show which module generated each message

Key Concepts:
• Key concepts: • __name__ is the module's fully qualified name (e.g., 'mypackage.utils') • Logger names use dot notation for hierarchy: 'a.b' is a child of 'a' • Child loggers propagate messages to parent loggers • The root logger is the ancestor of all loggers How it works: • In mypackage/utils.py, __name__ is 'mypackage.utils' • logging.getLogger('mypackage.utils') creates a logger in the hierarchy • Settings on 'mypackage' logger apply to all 'mypackage.*' loggers • This allows configuring logging per-package or per-module Example: # In mypackage/utils.py import logging logger = logging.getLogger(__name__) # logger named 'mypackage.utils' logger.info("Processing data") # Configure at package level pkg_logger = logging.getLogger('mypackage') pkg_logger.setLevel(logging.DEBUG) # Affects all mypackage.* loggers Common uses: • Best practice for library and application logging • Enables per-module log configuration • Makes log output show which module generated each message

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q12: Multiple handlers on one logger
  (_i: number) => ({
    q: `Can you attach multiple handlers to a single logger?`,
    o: ["Yes", "No", "Only with basicConfig", "Only two maximum"],
    c: 0,
    e: "Yes — a logger can have multiple handlers, e.g., one for console and one for file.",
    de: `A single logger can have any number of handlers attached to it. Each handler independently processes log records, so you can send the same log message to multiple destinations simultaneously.

Key concepts:
• No limit on the number of handlers per logger
• Each handler can have its own level and formatter
• Common pattern: console handler for development + file handler for persistence
• Handlers process records independently

How it works:
• Logger receives a log message
• Message is passed to ALL attached handlers
• Each handler applies its own level filter
• Each handler uses its own formatter
• Output goes to each handler's destination

Example:
>>> import logging
>>> logger = logging.getLogger('myapp')
>>> logger.setLevel(logging.DEBUG)
>>>
>>> console = logging.StreamHandler()
>>> console.setLevel(logging.WARNING)
>>>
>>> file_h = logging.FileHandler('debug.log')
>>> file_h.setLevel(logging.DEBUG)
>>>
>>> logger.addHandler(console)
>>> logger.addHandler(file_h)
>>>
>>> logger.debug("Only in file")
>>> logger.warning("In both console and file")

Common uses:
• Console (WARNING+) + file (DEBUG+) for development
• File + email (CRITICAL) for production alerts
• Rotating file + syslog for server applications

Key Concepts:
• Key concepts: • No limit on the number of handlers per logger • Each handler can have its own level and formatter • Common pattern: console handler for development + file handler for persistence • Handlers process records independently How it works: • Logger receives a log message • Message is passed to ALL attached handlers • Each handler applies its own level filter • Each handler uses its own formatter • Output goes to each handler's destination Example: >>> import logging >>> logger = logging.getLogger('myapp') >>> logger.setLevel(logging.DEBUG) >>> >>> console = logging.StreamHandler() >>> console.setLevel(logging.WARNING) >>> >>> file_h = logging.FileHandler('debug.log') >>> file_h.setLevel(logging.DEBUG) >>> >>> logger.addHandler(console) >>> logger.addHandler(file_h) >>> >>> logger.debug("Only in file") >>> logger.warning("In both console and file") Common uses: • Console (WARNING+) + file (DEBUG+) for development • File + email (CRITICAL) for production alerts • Rotating file + syslog for server applications

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q13: logging.exception adds traceback
  (_i: number) => ({
    q: `logging.exception("msg")\n\nWhat extra info does this add compared to logging.error()?`,
    o: ["Includes traceback information", "Adds timestamp", "Adds the module name", "Nothing extra"],
    c: 0,
    e: "logging.exception() logs at ERROR level and includes the exception traceback.",
    de: `logging.exception() is like logging.error() but automatically includes the exception traceback in the log output. It should only be called from within an exception handler (except block).

Key concepts:
• Logs at ERROR level (same as logging.error)
• Automatically appends the current exception's traceback
• Must be called inside an except block
• Equivalent to logging.error("msg", exc_info=True)

How it works:
• Captures the current exception via sys.exc_info()
• Formats the full traceback
• Appends it to the log message
• Produces multi-line output showing the error chain

Example:
>>> import logging
>>> try:
...     result = 1 / 0
... except ZeroDivisionError:
...     logging.exception("Calculation failed")
ERROR:root:Calculation failed
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
ZeroDivisionError: division by zero

Common uses:
• Logging caught exceptions with full traceback for debugging
• Production error reporting
• Preferred over logging.error when you want stack trace details

Key Concepts:
• logging.exception("Calculation failed") ERROR:root:Calculation failed Traceback (most recent call last): File "<stdin>", line 2, in <module> ZeroDivisionError: division by zero Common uses: • Logging caught exceptions with full traceback for debugging • Production error reporting • Preferred over logging.error when you want stack trace details

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q14: print vs logging
  (_i: number) => ({
    q: `What is the key difference between print() and logging?`,
    o: ["Logging supports levels, formatting, handlers, and can be configured without code changes", "There is no difference", "print is faster", "logging only works in modules"],
    c: 0,
    e: "Logging provides levels, handlers, formatters, and external configuration — print does not.",
    de: `The logging module provides a robust, flexible framework for emitting log messages, whereas print() simply writes to stdout. Logging has features that print lacks entirely.

Key concepts:
• Logging has severity levels (DEBUG through CRITICAL)
• Logging has handlers (console, file, network, email, etc.)
• Logging has formatters (custom output format)
• Logging can be configured externally (config files, dictConfig)
• print() writes to stdout with no filtering or routing

How it works:
• print() always outputs to stdout (unless redirected)
• Logging routes messages through a configurable pipeline
• Log levels allow filtering without changing code
• Handlers allow routing to multiple destinations
• Configuration can be changed at deployment time

Example:
# print - no control
print("User logged in")  # Always prints to stdout

# logging - full control
import logging
logging.info("User logged in")  # Can be filtered, routed, formatted

Common uses:
• print() for quick debugging (remove before committing)
• logging for production applications
• logging for libraries (let the consumer configure output)
• logging for long-running services with structured output

Key Concepts:
• Key concepts: • Logging has severity levels (DEBUG through CRITICAL) • Logging has handlers (console, file, network, email, etc.) • Logging has formatters (custom output format) • Logging can be configured externally (config files, dictConfig) • print() writes to stdout with no filtering or routing How it works: • print() always outputs to stdout (unless redirected) • Logging routes messages through a configurable pipeline • Log levels allow filtering without changing code • Handlers allow routing to multiple destinations • Configuration can be changed at deployment time Example: # print - no control print("User logged in") # Always prints to stdout # logging - full control import logging logging.info("User logged in") # Can be filtered, routed, formatted Common uses: • print() for quick debugging (remove before committing) • logging for production applications • logging for libraries (let the consumer configure output) • logging for long-running services with structured output

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q15: FileHandler
  (_i: number) => ({
    q: `import logging\nlogging.FileHandler("app.log")\n\nWhat does this create?`,
    o: ["A handler that writes log records to a file", "A new log file with default content", "A logger named app", "A formatter for file output"],
    c: 0,
    e: "FileHandler creates a handler that writes log records to the specified file.",
    de: `logging.FileHandler creates a handler object that sends log output to a disk file. You attach it to a logger to direct log messages to a file instead of (or in addition to) the console.

Key concepts:
• Creates a handler that writes to the specified file
• File is opened in append mode ('a') by default
• Can specify mode='w' to overwrite on each run
• Must be attached to a logger with addHandler()

How it works:
• FileHandler("app.log") opens (or creates) app.log
• When a log record is emitted through this handler, it writes to the file
• Default mode is 'a' (append), so logs accumulate across runs
• The handler can have its own level and formatter

Example:
>>> import logging
>>> logger = logging.getLogger('myapp')
>>> handler = logging.FileHandler('app.log')
>>> handler.setLevel(logging.ERROR)
>>> formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
>>> handler.setFormatter(formatter)
>>> logger.addHandler(handler)
>>> logger.error("This goes to app.log")

Common uses:
• Persisting logs for later analysis
• Production logging to rotating files
• Audit trails and compliance logging
• Combining with RotatingFileHandler for size management

Key Concepts:
• Key concepts: • Creates a handler that writes to the specified file • File is opened in append mode ('a') by default • Can specify mode='w' to overwrite on each run • Must be attached to a logger with addHandler() How it works: • FileHandler("app.log") opens (or creates) app.log • When a log record is emitted through this handler, it writes to the file • Default mode is 'a' (append), so logs accumulate across runs • The handler can have its own level and formatter Example: >>> import logging >>> logger = logging.getLogger('myapp') >>> handler = logging.FileHandler('app.log') >>> handler.setLevel(logging.ERROR) >>> formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s') >>> handler.setFormatter(formatter) >>> logger.addHandler(handler) >>> logger.error("This goes to app.log") Common uses: • Persisting logs for later analysis • Production logging to rotating files • Audit trails and compliance logging • Combining with RotatingFileHandler for size management

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // ===== UNITTEST AND TESTING (16–35) =====

  // Q16: assertEqual
  (_i: number) => ({
    q: `import unittest\n\nclass Tests(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(1+1, 2)\n\nWhat does assertEqual check?`,
    o: ["That two values are equal", "That the values are the same object", "That the first value is True", "That no exception is raised"],
    c: 0,
    e: "assertEqual checks that the two arguments are equal (using ==).",
    de: `assertEqual(a, b) verifies that a == b. If the values are not equal, the test fails with a detailed message showing both values. It is the most commonly used assertion in unittest.

Key concepts:
• Uses == operator for comparison (not 'is')
• Fails with AssertionError if values differ
• Shows both expected and actual values in failure message
• Works with any types that support ==

How it works:
• Evaluates a == b
• If True, the test passes silently
• If False, raises AssertionError with diagnostic info
• Optional third argument: self.assertEqual(a, b, "custom message")

Example:
>>> import unittest
>>> class TestMath(unittest.TestCase):
...     def test_add(self):
...         self.assertEqual(1 + 1, 2)      # passes
...         self.assertEqual("ab", "a" + "b")  # passes
...         self.assertEqual([1,2], [1,2])     # passes

Common uses:
• Verifying function return values
• Checking computed results match expected values
• Comparing data structures for equality

Key Concepts:
• self.assertEqual([1,2], [1,2]) # passes Common uses: • Verifying function return values • Checking computed results match expected values • Comparing data structures for equality

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q17: assertTrue
  (_i: number) => ({
    q: `self.assertTrue(expr)\n\nWhat does this check in unittest?`,
    o: ["That expr is True", "That expr is False", "That expr is not None", "That expr equals 1"],
    c: 0,
    e: "assertTrue checks that the expression evaluates to True.",
    de: `assertTrue(expr) verifies that bool(expr) is True. It uses Python's truthiness rules, so any truthy value passes — not just the literal True.

Key concepts:
• Checks bool(expr) is True
• Any truthy value passes (non-zero numbers, non-empty containers, etc.)
• Fails with AssertionError if expr is falsy
• Less informative failure messages than assertEqual

How it works:
• Evaluates bool(expr)
• If truthy, test passes
• If falsy, raises AssertionError
• Failure message just says "False is not true" — not very descriptive

Example:
>>> self.assertTrue(1 == 1)     # passes (True is truthy)
>>> self.assertTrue([1, 2, 3])  # passes (non-empty list is truthy)
>>> self.assertTrue(42)         # passes (non-zero int is truthy)
>>> self.assertTrue("")         # FAILS (empty string is falsy)
>>> self.assertTrue(0)          # FAILS (zero is falsy)

Common uses:
• Checking boolean conditions
• Verifying predicates
• Prefer assertEqual when comparing specific values (better failure messages)

Key Concepts:
• Key concepts: • Checks bool(expr) is True • Any truthy value passes (non-zero numbers, non-empty containers, etc.) • Fails with AssertionError if expr is falsy • Less informative failure messages than assertEqual How it works: • Evaluates bool(expr) • If truthy, test passes • If falsy, raises AssertionError • Failure message just says "False is not true" — not very descriptive Example: >>> self.assertTrue(1 == 1) # passes (True is truthy) >>> self.assertTrue([1, 2, 3]) # passes (non-empty list is truthy) >>> self.assertTrue(42) # passes (non-zero int is truthy) >>> self.assertTrue("") # FAILS (empty string is falsy) >>> self.assertTrue(0) # FAILS (zero is falsy) Common uses: • Checking boolean conditions • Verifying predicates • Prefer assertEqual when comparing specific values (better failure messages)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q18: assertFalse
  (_i: number) => ({
    q: `self.assertFalse(expr)\n\nWhat does this check in unittest?`,
    o: ["That expr is False", "That expr is True", "That expr is None", "That expr equals 0"],
    c: 0,
    e: "assertFalse checks that the expression evaluates to False.",
    de: `assertFalse(expr) verifies that bool(expr) is False. It passes for any falsy value — not just the literal False.

Key concepts:
• Checks bool(expr) is False
• Any falsy value passes: 0, None, "", [], {}, False, etc.
• Fails with AssertionError if expr is truthy
• Opposite of assertTrue

How it works:
• Evaluates bool(expr)
• If falsy, test passes
• If truthy, raises AssertionError
• Failure message: "True is not false"

Example:
>>> self.assertFalse(1 == 2)   # passes (False is falsy)
>>> self.assertFalse("")       # passes (empty string is falsy)
>>> self.assertFalse(0)        # passes (zero is falsy)
>>> self.assertFalse(None)     # passes (None is falsy)
>>> self.assertFalse([1])      # FAILS (non-empty list is truthy)

Common uses:
• Verifying a condition does not hold
• Checking that a function returns a falsy value
• Negative test cases

Key Concepts:
• • Fails with AssertionError if expr is truthy • Opposite of assertTrue How it works: • Evaluates bool(expr) • If falsy, test passes • If truthy, raises AssertionError • Failure message: "True is not false" Example: >>> self.assertFalse(1 == 2) # passes (False is falsy) >>> self.assertFalse("") # passes (empty string is falsy) >>> self.assertFalse(0) # passes (zero is falsy) >>> self.assertFalse(None) # passes (None is falsy) >>> self.assertFalse([1]) # FAILS (non-empty list is truthy) Common uses: • Verifying a condition does not hold • Checking that a function returns a falsy value • Negative test cases

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q19: assertIs
  (_i: number) => ({
    q: `self.assertIs(a, b)\n\nWhat does this check?`,
    o: ["That a is b (same object identity)", "That a == b (equality)", "That a and b have the same type", "That a is not None"],
    c: 0,
    e: "assertIs checks that a and b are the exact same object (identity, not equality).",
    de: `assertIs(a, b) verifies that a is b — that both variables reference the exact same object in memory. This is stricter than assertEqual, which only checks value equality.

Key concepts:
• Uses the 'is' operator (identity check)
• a is b means id(a) == id(b)
• Different from assertEqual which uses ==
• Two equal values can be different objects

How it works:
• Checks if a and b point to the same object in memory
• Passes only if they are the same object (same id)
• Fails if they are different objects, even with equal values

Example:
>>> a = [1, 2, 3]
>>> b = a
>>> c = [1, 2, 3]
>>> self.assertIs(a, b)    # passes (same object)
>>> self.assertIs(a, c)    # FAILS (equal but different objects)
>>> self.assertIs(None, None)  # passes (None is a singleton)

Common uses:
• Verifying singleton patterns
• Checking None identity (prefer assertIsNone)
• Verifying that two references point to the same object

Key Concepts:
• Key concepts: • Uses the 'is' operator (identity check) • a is b means id(a) == id(b) • Different from assertEqual which uses == • Two equal values can be different objects How it works: • Checks if a and b point to the same object in memory • Passes only if they are the same object (same id) • Fails if they are different objects, even with equal values Example: >>> a = [1, 2, 3] >>> b = a >>> c = [1, 2, 3] >>> self.assertIs(a, b) # passes (same object) >>> self.assertIs(a, c) # FAILS (equal but different objects) >>> self.assertIs(None, None) # passes (None is a singleton) Common uses: • Verifying singleton patterns • Checking None identity (prefer assertIsNone) • Verifying that two references point to the same object

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q20: assertIsNone
  (_i: number) => ({
    q: `self.assertIsNone(x)\n\nWhat does this check?`,
    o: ["That x is None", "That x is False", "That x is 0", "That x is empty"],
    c: 0,
    e: "assertIsNone checks that x is None (using identity, not equality).",
    de: `assertIsNone(x) verifies that x is None. It uses the 'is' operator internally, checking identity rather than equality. Since None is a singleton in Python, this is the correct way to test for None.

Key concepts:
• Equivalent to assertIs(x, None)
• Uses identity check (is), not equality (==)
• None is a singleton — there is only one None object
• Preferred over assertEqual(x, None)

How it works:
• Checks x is None
• Passes if x is the None singleton
• Fails for any other value, including 0, False, "", []

Example:
>>> self.assertIsNone(None)            # passes
>>> self.assertIsNone(some_func())     # passes if func returns None
>>> self.assertIsNone(0)               # FAILS (0 is not None)
>>> self.assertIsNone(False)           # FAILS (False is not None)

Common uses:
• Checking functions that return None
• Verifying optional attributes are unset
• Testing default return values

Key Concepts:
• Key concepts: • Equivalent to assertIs(x, None) • Uses identity check (is), not equality (==) • None is a singleton — there is only one None object • Preferred over assertEqual(x, None) How it works: • Checks x is None • Passes if x is the None singleton • Fails for any other value, including 0, False, "", [] Example: >>> self.assertIsNone(None) # passes >>> self.assertIsNone(some_func()) # passes if func returns None >>> self.assertIsNone(0) # FAILS (0 is not None) >>> self.assertIsNone(False) # FAILS (False is not None) Common uses: • Checking functions that return None • Verifying optional attributes are unset • Testing default return values

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q21: assertIn
  (_i: number) => ({
    q: `self.assertIn(a, b)\n\nWhat does this check?`,
    o: ["That a is in b", "That a equals b", "That a is b", "That a is a subset of b"],
    c: 0,
    e: "assertIn checks that a is a member of b (using the 'in' operator).",
    de: `assertIn(a, b) verifies that a in b is True. It works with any container or iterable that supports the 'in' operator — lists, tuples, strings, sets, dicts, etc.

Key concepts:
• Uses the 'in' operator
• Works with lists, tuples, strings, sets, dicts (checks keys)
• Fails with a clear message showing what was not found and where

How it works:
• Evaluates a in b
• If True, test passes
• If False, raises AssertionError with both values shown

Example:
>>> self.assertIn(3, [1, 2, 3])     # passes
>>> self.assertIn("el", "hello")    # passes (substring)
>>> self.assertIn("x", {"x": 1})   # passes (key in dict)
>>> self.assertIn(4, [1, 2, 3])    # FAILS

Common uses:
• Checking membership in collections
• Verifying substrings in strings
• Checking keys exist in dictionaries

Key Concepts:
• Key concepts: • Uses the 'in' operator • Works with lists, tuples, strings, sets, dicts (checks keys) • Fails with a clear message showing what was not found and where How it works: • Evaluates a in b • If True, test passes • If False, raises AssertionError with both values shown Example: >>> self.assertIn(3, [1, 2, 3]) # passes >>> self.assertIn("el", "hello") # passes (substring) >>> self.assertIn("x", {"x": 1}) # passes (key in dict) >>> self.assertIn(4, [1, 2, 3]) # FAILS Common uses: • Checking membership in collections • Verifying substrings in strings • Checking keys exist in dictionaries

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q22: assertRaises
  (_i: number) => ({
    q: `self.assertRaises(ValueError)\n\nWhat is this used to check?`,
    o: ["That a ValueError is raised", "That no error occurs", "That the value is valid", "That ValueError is a class"],
    c: 0,
    e: "assertRaises checks that the specified exception is raised during execution.",
    de: `assertRaises(ExceptionType) verifies that a specific exception is raised. It can be used as a context manager (with statement) or by passing a callable and arguments.

Key concepts:
• Verifies that a specific exception type is raised
• Test passes if the exception is raised
• Test fails if the exception is NOT raised
• Can be used as context manager or with callable

How it works:
• As context manager: with self.assertRaises(ValueError): risky_code()
• As callable: self.assertRaises(ValueError, int, "abc")
• Catches the exception and the test passes
• If the exception is not raised, AssertionError is raised

Example:
>>> # Context manager style
>>> with self.assertRaises(ValueError):
...     int("abc")  # passes — ValueError is raised
>>>
>>> # Callable style
>>> self.assertRaises(ValueError, int, "abc")  # also passes
>>>
>>> # This FAILS — no ValueError raised:
>>> with self.assertRaises(ValueError):
...     int("123")  # valid, no error

Common uses:
• Testing error handling code
• Verifying input validation
• Ensuring edge cases raise appropriate exceptions

Key Concepts:
• int("123") # valid, no error Common uses: • Testing error handling code • Verifying input validation • Ensuring edge cases raise appropriate exceptions

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q23: assertRaises with context manager
  (_i: number) => ({
    q: `with self.assertRaises(ValueError):\n    int("abc")\n\nDoes this test pass?`,
    o: ["Yes", "No", "It raises ValueError", "It raises AssertionError"],
    c: 0,
    e: "Yes — int('abc') raises ValueError, which is exactly what assertRaises expects.",
    de: `This test passes because int("abc") raises a ValueError, and assertRaises(ValueError) is checking that a ValueError is raised. The context manager catches the expected exception and the test passes silently.

Key concepts:
• int("abc") raises ValueError because "abc" is not a valid integer
• assertRaises(ValueError) expects this exact exception type
• When the expected exception is raised, the test passes
• If no exception or a different exception was raised, the test would fail

How it works:
• The with block executes int("abc")
• ValueError is raised
• assertRaises catches it and verifies the type matches
• Type matches (ValueError == ValueError), so the test passes

Example:
>>> with self.assertRaises(ValueError):
...     int("abc")
# Test passes — ValueError was raised as expected

>>> with self.assertRaises(TypeError):
...     int("abc")
# Test FAILS — ValueError was raised, not TypeError

>>> with self.assertRaises(ValueError):
...     int("123")
# Test FAILS — no exception was raised

Key Concepts:
• int("123") # Test FAILS — no exception was raised

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q24: assertAlmostEqual
  (_i: number) => ({
    q: `self.assertAlmostEqual(0.1 + 0.2, 0.3)\n\nDoes this pass?`,
    o: ["Yes", "No", "Error", "Depends on the system"],
    c: 0,
    e: "Yes — assertAlmostEqual checks within 7 decimal places, handling floating-point imprecision.",
    de: `assertAlmostEqual(a, b) checks that a and b are equal when rounded to 7 decimal places (by default). Since 0.1 + 0.2 produces 0.30000000000000004 due to IEEE 754 floating-point representation, a direct == comparison would fail. But assertAlmostEqual accounts for this imprecision.

Key concepts:
• Default precision: 7 decimal places
• round(a - b, 7) == 0 is the check
• Handles floating-point representation errors
• Optional 'places' parameter to change precision

How it works:
• Computes abs(0.30000000000000004 - 0.3) ≈ 5.5e-17
• Rounds to 7 decimal places: 0.0000000
• This equals 0, so the test passes
• assertEqual(0.1+0.2, 0.3) would FAIL

Example:
>>> self.assertAlmostEqual(0.1 + 0.2, 0.3)       # passes (within 7 places)
>>> self.assertEqual(0.1 + 0.2, 0.3)              # FAILS (not exactly equal)
>>> self.assertAlmostEqual(1.0, 1.001, places=2)  # passes (within 2 places)
>>> self.assertAlmostEqual(1.0, 1.1, places=1)    # FAILS (differs at 1 place)

Common uses:
• Comparing floating-point computation results
• Scientific calculations where exact equality is impossible
• Financial calculations with rounding

Key Concepts:
• Key concepts: • Default precision: 7 decimal places • round(a - b, 7) == 0 is the check • Handles floating-point representation errors • Optional 'places' parameter to change precision How it works: • Computes abs(0.30000000000000004 - 0.3) ≈ 5.5e-17 • Rounds to 7 decimal places: 0.0000000 • This equals 0, so the test passes • assertEqual(0.1+0.2, 0.3) would FAIL Example: >>> self.assertAlmostEqual(0.1 + 0.2, 0.3) # passes (within 7 places) >>> self.assertEqual(0.1 + 0.2, 0.3) # FAILS (not exactly equal) >>> self.assertAlmostEqual(1.0, 1.001, places=2) # passes (within 2 places) >>> self.assertAlmostEqual(1.0, 1.1, places=1) # FAILS (differs at 1 place) Common uses: • Comparing floating-point computation results • Scientific calculations where exact equality is impossible • Financial calculations with rounding

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q25: setUp method
  (_i: number) => ({
    q: `What does setUp(self) do in a unittest.TestCase?`,
    o: ["Runs before each test method", "Runs once before all tests", "Runs after each test", "Initializes the test runner"],
    c: 0,
    e: "setUp runs before each individual test method, setting up test fixtures.",
    de: `setUp(self) is a special method that unittest calls before every individual test method in the class. It is used to set up test fixtures — objects, connections, or state that each test needs.

Key concepts:
• Called before EACH test method (not once for the class)
• Used to create fresh test fixtures
• Ensures each test starts with a clean state
• Counterpart of tearDown (called after each test)

How it works:
• unittest discovers all methods starting with 'test'
• Before each test method: setUp() is called
• Then the test method runs
• Then tearDown() is called (if defined)
• This cycle repeats for every test method

Example:
>>> class TestList(unittest.TestCase):
...     def setUp(self):
...         self.items = [1, 2, 3]   # fresh list for each test
...
...     def test_append(self):
...         self.items.append(4)
...         self.assertEqual(len(self.items), 4)
...
...     def test_remove(self):
...         self.items.remove(1)
...         self.assertEqual(len(self.items), 2)
# setUp creates a fresh [1, 2, 3] before each test

Common uses:
• Creating database connections
• Setting up test data
• Initializing objects under test

Key Concepts:
• self.assertEqual(len(self.items), 2) # setUp creates a fresh [1, 2, 3] before each test Common uses: • Creating database connections • Setting up test data • Initializing objects under test

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q26: tearDown method
  (_i: number) => ({
    q: `What does tearDown(self) do in a unittest.TestCase?`,
    o: ["Runs after each test method", "Runs once after all tests", "Runs before each test", "Destroys the test class"],
    c: 0,
    e: "tearDown runs after each individual test method for cleanup.",
    de: `tearDown(self) is called after every individual test method, even if the test raised an exception. It is used to clean up resources that setUp created.

Key concepts:
• Called after EACH test method
• Runs even if the test method failed or raised an exception
• Used for cleanup: closing files, database connections, temp files
• Counterpart of setUp

How it works:
• Test method completes (pass or fail)
• tearDown() is called
• Resources created in setUp are cleaned up
• Next test's setUp starts fresh

Example:
>>> class TestFile(unittest.TestCase):
...     def setUp(self):
...         self.f = open('test.txt', 'w')
...
...     def tearDown(self):
...         self.f.close()
...         os.remove('test.txt')
...
...     def test_write(self):
...         self.f.write("hello")
# tearDown closes file and removes it after each test

Common uses:
• Closing file handles and network connections
• Removing temporary files
• Rolling back database transactions
• Restoring modified global state

Key Concepts:
• self.f.write("hello") # tearDown closes file and removes it after each test Common uses: • Closing file handles and network connections • Removing temporary files • Rolling back database transactions • Restoring modified global state

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q27: setUpClass
  (_i: number) => ({
    q: `What does setUpClass(cls) do in unittest?`,
    o: ["Runs once before all tests in the class", "Runs before each test", "Runs after all tests", "Creates the test class"],
    c: 0,
    e: "setUpClass runs once before all test methods in the class, not before each one.",
    de: `setUpClass(cls) is a class method that runs exactly once before any test methods in the class execute. It is used for expensive setup that should only happen once, not repeated for each test.

Key concepts:
• Decorated with @classmethod
• Receives cls (the class) instead of self (an instance)
• Runs ONCE before all tests in the class
• Counterpart: tearDownClass runs once after all tests
• Different from setUp which runs before EACH test

How it works:
• unittest calls setUpClass before the first test method
• The setup is shared across all test methods
• tearDownClass is called after the last test method
• Useful for expensive operations like database setup

Example:
>>> class TestDB(unittest.TestCase):
...     @classmethod
...     def setUpClass(cls):
...         cls.db = create_database()  # once
...
...     @classmethod
...     def tearDownClass(cls):
...         cls.db.close()  # once
...
...     def test_query(self):
...         result = self.db.query("SELECT 1")
...         self.assertEqual(result, 1)

Common uses:
• Creating database connections
• Starting test servers
• Loading large test datasets
• Any expensive one-time setup

Key Concepts:
• self.assertEqual(result, 1) Common uses: • Creating database connections • Starting test servers • Loading large test datasets • Any expensive one-time setup

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q28: @unittest.skip
  (_i: number) => ({
    q: `@unittest.skip("reason")\ndef test_feature(self): ...\n\nWhat does this do?`,
    o: ["Skips the decorated test", "Fails the test with 'reason'", "Runs the test but ignores failures", "Marks the test as passing"],
    c: 0,
    e: "@unittest.skip unconditionally skips the decorated test method.",
    de: `@unittest.skip("reason") is a decorator that unconditionally skips the decorated test. The test is not executed, and the reason string is reported in the test output.

Key concepts:
• Test is not executed at all
• Reason string appears in test output
• Counted as 'skipped' (not pass, not fail)
• Related: @unittest.skipIf(condition, reason) and @unittest.skipUnless(condition, reason)

How it works:
• unittest discovers the test method
• Sees the @skip decorator
• Reports the test as skipped with the reason
• Does not execute the test body

Example:
>>> @unittest.skip("Feature not implemented yet")
... def test_new_feature(self):
...     self.assertEqual(new_function(), 42)
# Output: test_new_feature ... skipped 'Feature not implemented yet'

>>> @unittest.skipIf(sys.platform == 'win32', "Not supported on Windows")
... def test_unix_feature(self):
...     pass

>>> @unittest.skipUnless(sys.platform == 'linux', "Linux only")
... def test_linux_feature(self):
...     pass

Common uses:
• Temporarily disabling broken tests
• Platform-specific tests
• Tests for unimplemented features
• Environment-dependent tests

Key Concepts:
• pass Common uses: • Temporarily disabling broken tests • Platform-specific tests • Tests for unimplemented features • Environment-dependent tests

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q29: @unittest.expectedFailure
  (_i: number) => ({
    q: `@unittest.expectedFailure\ndef test_known_bug(self): ...\n\nWhat does this decorator do?`,
    o: ["Marks a test that is expected to fail", "Forces the test to fail", "Skips the test", "Reruns the test on failure"],
    c: 0,
    e: "@expectedFailure marks a test that is known to fail — if it fails, the result is 'expected failure' (not a test failure).",
    de: `@unittest.expectedFailure marks a test that is expected to fail. If the test does fail, it is reported as an "expected failure" (not counted as a failure). If the test unexpectedly passes, it is reported as an "unexpected success."

Key concepts:
• Test fails → reported as "expected failure" (ok)
• Test passes → reported as "unexpected success" (problem!)
• Useful for documenting known bugs
• Test is still executed (unlike @skip)

How it works:
• The test method runs normally
• If it raises AssertionError or another error → "expected failure"
• If it completes without error → "unexpected success"
• Neither counts as a normal pass or fail

Example:
>>> @unittest.expectedFailure
... def test_known_bug(self):
...     self.assertEqual(buggy_function(), 42)  # known to return wrong value
# If buggy_function returns wrong value: "expected failure" (x)
# If buggy_function is fixed and returns 42: "unexpected success" (u)

Common uses:
• Documenting known bugs without removing the test
• Tracking issues that should eventually be fixed
• Ensuring awareness when a bug is unexpectedly fixed

Key Concepts:
• self.assertEqual(buggy_function(), 42) # known to return wrong value # If buggy_function returns wrong value: "expected failure" (x) # If buggy_function is fixed and returns 42: "unexpected success" (u) Common uses: • Documenting known bugs without removing the test • Tracking issues that should eventually be fixed • Ensuring awareness when a bug is unexpectedly fixed

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q30: assert passes
  (_i: number) => ({
    q: `assert 1 == 1\n\nDoes this raise an error?`,
    o: ["No", "Yes, AssertionError", "Yes, ValueError", "Yes, SyntaxError"],
    c: 0,
    e: "No — the assertion passes because 1 == 1 is True.",
    de: `The assert statement evaluates the expression following it. If the expression is truthy, execution continues normally with no effect. If the expression is falsy, it raises an AssertionError.

Key concepts:
• assert expr — raises AssertionError if expr is falsy
• 1 == 1 evaluates to True
• True is truthy, so no error is raised
• The assert statement has zero effect when the condition passes

How it works:
• Python evaluates 1 == 1
• Result is True
• Since the condition is truthy, assert does nothing
• Execution continues to the next statement

Example:
>>> assert 1 == 1       # passes, no error
>>> assert True         # passes
>>> assert "hello"      # passes (truthy)
>>> assert [1, 2, 3]    # passes (truthy)

Common uses:
• Sanity checks during development
• Verifying preconditions and postconditions
• Debugging aids (can be disabled with -O flag)

Key Concepts:
• Key concepts: • assert expr — raises AssertionError if expr is falsy • 1 == 1 evaluates to True • True is truthy, so no error is raised • The assert statement has zero effect when the condition passes How it works: • Python evaluates 1 == 1 • Result is True • Since the condition is truthy, assert does nothing • Execution continues to the next statement Example: >>> assert 1 == 1 # passes, no error >>> assert True # passes >>> assert "hello" # passes (truthy) >>> assert [1, 2, 3] # passes (truthy) Common uses: • Sanity checks during development • Verifying preconditions and postconditions • Debugging aids (can be disabled with -O flag)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q31: assert fails
  (_i: number) => ({
    q: `assert 1 == 2\n\nWhat error is raised?`,
    o: ["AssertionError", "ValueError", "TypeError", "RuntimeError"],
    c: 0,
    e: "AssertionError is raised because 1 == 2 is False.",
    de: `When an assert statement's expression is falsy, Python raises an AssertionError. Since 1 == 2 evaluates to False, the assertion fails and AssertionError is raised.

Key concepts:
• assert with a falsy expression raises AssertionError
• 1 == 2 is False (falsy)
• AssertionError is a built-in exception
• It is a subclass of Exception

How it works:
• Python evaluates 1 == 2
• Result is False
• Since the condition is falsy, assert raises AssertionError
• Program terminates unless the error is caught

Example:
>>> assert 1 == 2
Traceback (most recent call last):
  File "<stdin>", line 1
AssertionError

>>> assert False
AssertionError

>>> assert 0
AssertionError

>>> assert []
AssertionError

Key Concepts:
• Key concepts: • assert with a falsy expression raises AssertionError • 1 == 2 is False (falsy) • AssertionError is a built-in exception • It is a subclass of Exception How it works: • Python evaluates 1 == 2 • Result is False • Since the condition is falsy, assert raises AssertionError • Program terminates unless the error is caught Example: >>> assert 1 == 2 Traceback (most recent call last): File "<stdin>", line 1 AssertionError >>> assert False AssertionError >>> assert 0 AssertionError >>> assert [] AssertionError

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q32: assert with message
  (_i: number) => ({
    q: `assert 1 == 2, "numbers not equal"\n\nWhere does the message appear?`,
    o: ["In the AssertionError", "In stdout", "In stderr only", "It is ignored"],
    c: 0,
    e: "The message becomes part of the AssertionError that is raised.",
    de: `The optional second part of an assert statement (after the comma) provides a custom error message that is included in the AssertionError when the assertion fails.

Key concepts:
• Syntax: assert expression, "error message"
• The message is passed to AssertionError as its argument
• Only evaluated if the assertion fails
• Helps identify which assertion failed and why

How it works:
• Python evaluates 1 == 2 → False
• Since falsy, raises AssertionError("numbers not equal")
• The message appears in the traceback
• Makes debugging easier

Example:
>>> assert 1 == 2, "numbers not equal"
Traceback (most recent call last):
  File "<stdin>", line 1
AssertionError: numbers not equal

>>> x = -5
>>> assert x >= 0, f"Expected non-negative, got {x}"
AssertionError: Expected non-negative, got -5

Common uses:
• Providing descriptive failure messages
• Including variable values in failure messages
• Making assertion failures self-documenting

Key Concepts:
• Key concepts: • Syntax: assert expression, "error message" • The message is passed to AssertionError as its argument • Only evaluated if the assertion fails • Helps identify which assertion failed and why How it works: • Python evaluates 1 == 2 → False • Since falsy, raises AssertionError("numbers not equal") • The message appears in the traceback • Makes debugging easier Example: >>> assert 1 == 2, "numbers not equal" Traceback (most recent call last): File "<stdin>", line 1 AssertionError: numbers not equal >>> x = -5 >>> assert x >= 0, f"Expected non-negative, got {x}" AssertionError: Expected non-negative, got -5 Common uses: • Providing descriptive failure messages • Including variable values in failure messages • Making assertion failures self-documenting

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q33: Disabling assert
  (_i: number) => ({
    q: `Can assert statements be disabled at runtime?`,
    o: ["Yes, with python -O flag", "No, never", "Yes, with a config file", "Yes, with import assert_off"],
    c: 0,
    e: "Yes — running python -O (optimize) disables all assert statements.",
    de: `Assert statements can be completely disabled by running Python with the -O (optimize) flag. When Python runs in optimized mode, all assert statements are removed from the bytecode entirely — they are not executed at all.

Key concepts:
• python -O disables assert statements
• -O sets __debug__ to False
• Assert statements are stripped from bytecode
• This is why assert should NOT be used for data validation

How it works:
• Normal: python script.py — asserts are active, __debug__ is True
• Optimized: python -O script.py — asserts are removed, __debug__ is False
• The assert statements are not just skipped; they are eliminated from the compiled code
• No runtime cost in optimized mode

Example:
# script.py
assert False, "This will crash"
print("Reached here")

$ python script.py
# AssertionError: This will crash

$ python -O script.py
# Reached here   (assert was removed!)

Common uses:
• Production deployments often use -O for performance
• This is why input validation should use if/raise, not assert
• assert is for debugging and development only

Key Concepts:
• Key concepts: • python -O disables assert statements • -O sets __debug__ to False • Assert statements are stripped from bytecode • This is why assert should NOT be used for data validation How it works: • Normal: python script.py — asserts are active, __debug__ is True • Optimized: python -O script.py — asserts are removed, __debug__ is False • The assert statements are not just skipped; they are eliminated from the compiled code • No runtime cost in optimized mode Example: # script.py assert False, "This will crash" print("Reached here") $ python script.py # AssertionError: This will crash $ python -O script.py # Reached here (assert was removed!) Common uses: • Production deployments often use -O for performance • This is why input validation should use if/raise, not assert • assert is for debugging and development only

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q34: __debug__ flag
  (_i: number) => ({
    q: `__debug__ is True when Python is running in what mode?`,
    o: ["Normal mode (False with -O flag)", "Optimized mode", "Debug mode only", "It is always True"],
    c: 0,
    e: "__debug__ is True during normal execution and False when running with python -O.",
    de: `__debug__ is a built-in constant that is True under normal Python execution and False when the interpreter is started with the -O (optimize) flag. It is closely tied to assert statements.

Key concepts:
• __debug__ is True by default (normal execution)
• __debug__ is False with python -O
• It is a compile-time constant — cannot be reassigned
• assert statements are equivalent to: if __debug__: if not expr: raise AssertionError

How it works:
• Normal: python script.py → __debug__ is True, asserts active
• Optimized: python -O script.py → __debug__ is False, asserts stripped
• You cannot do __debug__ = False (SyntaxError)
• The value is determined at interpreter startup

Example:
>>> __debug__
True  # in normal mode

>>> # With python -O:
>>> __debug__
False

>>> if __debug__:
...     print("Debug mode")
... else:
...     print("Optimized mode")

Common uses:
• Conditional debug-only code
• Performance-sensitive code that skips checks in production
• Understanding how assert works internally

Key Concepts:
• print("Optimized mode") Common uses: • Conditional debug-only code • Performance-sensitive code that skips checks in production • Understanding how assert works internally

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q35: doctest
  (_i: number) => ({
    q: `What is doctest in Python?`,
    o: ["A testing framework that extracts tests from docstrings", "A tool for documenting tests", "A type checker", "A debugger"],
    c: 0,
    e: "doctest finds and runs tests embedded in docstrings as interactive Python sessions.",
    de: `The doctest module searches for pieces of text that look like interactive Python sessions in docstrings, and then executes those sessions to verify they work exactly as shown. It serves dual purposes: documentation and testing.

Key concepts:
• Tests are written as interactive Python sessions in docstrings
• Uses >>> prompt to identify test lines
• Expected output follows on the next line(s)
• Verifies that the actual output matches the expected output

How it works:
• doctest scans docstrings for >>> prompts
• Extracts the code after >>>
• Executes the code
• Compares actual output with expected output in the docstring
• Reports any mismatches

Example:
>>> def add(a, b):
...     """Add two numbers.
...
...     >>> add(2, 3)
...     5
...     >>> add(-1, 1)
...     0
...     >>> add(0, 0)
...     0
...     """
...     return a + b
>>>
>>> import doctest
>>> doctest.testmod()  # runs all doctests in the module

Common uses:
• Self-testing documentation
• Simple unit tests embedded in docstrings
• Ensuring code examples in docs stay accurate
• Quick verification of function behavior

Key Concepts:
• return a + b >>> >>> import doctest >>> doctest.testmod() # runs all doctests in the module Common uses: • Self-testing documentation • Simple unit tests embedded in docstrings • Ensuring code examples in docs stay accurate • Quick verification of function behavior

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // ===== ERROR HANDLING PATTERNS (36–49) =====

  // Q36: try/except with assignment
  (_i: number) => ({
    q: `try:\n    x = 1/0\nexcept ZeroDivisionError:\n    x = 0\n\nprint(x)`,
    o: ["0", "Error", "None", "1"],
    c: 0,
    e: "1/0 raises ZeroDivisionError, caught by except which sets x = 0.",
    de: `The try block attempts 1/0, which raises ZeroDivisionError. The except clause catches this specific exception and sets x = 0. After the except block, execution continues normally and print(x) outputs 0.

Key concepts:
• 1/0 raises ZeroDivisionError
• except ZeroDivisionError catches it specifically
• x = 0 executes in the except block
• Execution continues after the try/except

How it works:
• try: x = 1/0 → ZeroDivisionError is raised
• x was never assigned in the try block (error happened first)
• except ZeroDivisionError: matches the raised exception
• x = 0 executes in the except block
• print(x) outputs 0

Example:
>>> try:
...     x = 1/0
... except ZeroDivisionError:
...     x = 0
>>> x
0

Common uses:
• Providing default values when operations fail
• Graceful error recovery
• Safe division with fallback

Key Concepts:
• x = 0 >>> x 0 Common uses: • Providing default values when operations fail • Graceful error recovery • Safe division with fallback

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q37: except as e with str()
  (_i: number) => ({
    q: `try:\n    x = int("abc")\nexcept ValueError as e:\n    x = str(e)\n\ntype(x)`,
    o: ["<class 'str'>", "<class 'ValueError'>", "<class 'int'>", "<class 'NoneType'>"],
    c: 0,
    e: "The exception is caught as e, and str(e) converts the error message to a string.",
    de: `int("abc") raises ValueError. The except clause catches it as e (the exception object). str(e) converts the exception's message to a string and assigns it to x. Therefore type(x) is str.

Key concepts:
• int("abc") raises ValueError: invalid literal for int() with base 10: 'abc'
• 'as e' binds the exception object to variable e
• str(e) returns the exception's string representation (the error message)
• x becomes a string, so type(x) is <class 'str'>

How it works:
• try: int("abc") raises ValueError
• except ValueError as e: catches it, e is the ValueError object
• x = str(e) → x = "invalid literal for int() with base 10: 'abc'"
• type(x) → <class 'str'>

Example:
>>> try:
...     int("abc")
... except ValueError as e:
...     msg = str(e)
>>> type(msg)
<class 'str'>
>>> msg
"invalid literal for int() with base 10: 'abc'"

Common uses:
• Extracting error messages for logging
• Creating user-friendly error responses
• Inspecting exception details

Key Concepts:
• msg = str(e) >>> type(msg) <class 'str'> >>> msg "invalid literal for int() with base 10: 'abc'" Common uses: • Extracting error messages for logging • Creating user-friendly error responses • Inspecting exception details

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q38: try/else
  (_i: number) => ({
    q: `try:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\n\nprint(x)`,
    o: ["3", "1", "2", "Error"],
    c: 0,
    e: "The else block runs when no exception occurred in try. Since x=1 succeeds, else sets x=3.",
    de: `The else clause in a try statement runs only when no exception was raised in the try block. Here, x = 1 succeeds without error, so the else block executes and sets x = 3. The except block is skipped.

Key concepts:
• else runs ONLY when no exception occurred in try
• If an exception occurs, else is skipped (except runs instead)
• else runs after try completes successfully
• The else block is optional

How it works:
• try: x = 1 → succeeds, no exception
• except: x = 2 → skipped (no exception)
• else: x = 3 → runs because try succeeded
• print(x) → 3

Example:
>>> try:
...     result = 10 / 2
... except ZeroDivisionError:
...     print("Error!")
... else:
...     print("Success:", result)
Success: 5.0

Common uses:
• Separating normal flow from error handling
• Code that should only run if try succeeded
• Avoiding putting too much code in the try block

Key Concepts:
• print("Success:", result) Success: 5.0 Common uses: • Separating normal flow from error handling • Code that should only run if try succeeded • Avoiding putting too much code in the try block

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q39: try/finally
  (_i: number) => ({
    q: `When does the finally block run in try/finally?`,
    o: ["Always, whether an exception occurred or not", "Only when an exception occurs", "Only when no exception occurs", "Only when except is present"],
    c: 0,
    e: "finally always runs — whether the try block succeeded, raised an exception, or even if a return was executed.",
    de: `The finally block is guaranteed to execute regardless of what happens in the try block. It runs after try succeeds, after an exception is caught, after an uncaught exception, and even after a return statement.

Key concepts:
• finally ALWAYS runs — no exceptions (pun intended)
• Runs after try block (success or failure)
• Runs even if return, break, or continue is in try/except
• Used for cleanup that must happen no matter what

How it works:
• try block executes
• If exception: except block runs (if present), then finally
• If no exception: else block runs (if present), then finally
• If uncaught exception: finally runs, then exception propagates
• If return in try/except: finally runs before the return

Example:
>>> try:
...     f = open("file.txt")
...     data = f.read()
... except FileNotFoundError:
...     print("File not found")
... finally:
...     print("Cleanup runs always")
# "Cleanup runs always" prints regardless of success or failure

Common uses:
• Closing files and database connections
• Releasing locks
• Restoring state
• Any cleanup that must happen

Key Concepts:
• print("Cleanup runs always") # "Cleanup runs always" prints regardless of success or failure Common uses: • Closing files and database connections • Releasing locks • Restoring state • Any cleanup that must happen

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q40: try/except/else/finally coexistence
  (_i: number) => ({
    q: `try:\n    x = 1\nexcept:\n    pass\nelse:\n    y = 2\nfinally:\n    z = 3\n\nCan except, else, and finally all coexist?`,
    o: ["Yes, all three can coexist", "No, only two at a time", "No, else and finally conflict", "Only with specific exceptions"],
    c: 0,
    e: "Yes — a try statement can have except, else, and finally all together.",
    de: `A try statement can include all three clauses: except, else, and finally. They execute in a specific order depending on whether an exception occurred.

Key concepts:
• Full syntax: try / except / else / finally
• All three clauses are optional but have rules:
  - else requires at least one except clause
  - finally can appear alone (try/finally) or with except
• Execution order depends on whether an exception occurred

How it works (no exception):
• try block executes → success
• except block → skipped
• else block → runs
• finally block → runs

How it works (exception caught):
• try block → exception raised
• except block → runs (catches exception)
• else block → skipped
• finally block → runs

Example:
>>> try:
...     result = 10 / 2
... except ZeroDivisionError:
...     print("Error")
... else:
...     print("Success:", result)
... finally:
...     print("Done")
Success: 5.0
Done

Common uses:
• Complete error handling with cleanup
• Database transactions (try/except for errors, else for commit, finally for close)

Key Concepts:
• print("Done") Success: 5.0 Done Common uses: • Complete error handling with cleanup • Database transactions (try/except for errors, else for commit, finally for close)

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q41: Exception chaining with raise from
  (_i: number) => ({
    q: `raise ValueError("msg") from TypeError("cause")\n\nWhat is this called?`,
    o: ["Exception chaining", "Exception nesting", "Exception forwarding", "Exception wrapping"],
    c: 0,
    e: "Exception chaining links exceptions to show the original cause using the 'from' keyword.",
    de: `Exception chaining explicitly links a new exception to an original cause using the 'from' keyword. The original exception is stored in the __cause__ attribute of the new exception.

Key concepts:
• raise X from Y chains exception Y as the cause of X
• Y is stored in X.__cause__
• The traceback shows both exceptions with "The above exception was the direct cause of..."
• Helps debugging by preserving the original error context

How it works:
• raise ValueError("msg") creates a new ValueError
• from TypeError("cause") attaches the TypeError as __cause__
• Both exceptions appear in the traceback
• The chain shows the causal relationship

Example:
>>> try:
...     int("abc")
... except ValueError as original:
...     raise RuntimeError("Processing failed") from original
Traceback (most recent call last):
  ...
ValueError: invalid literal for int() with base 10: 'abc'

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  ...
RuntimeError: Processing failed

Common uses:
• Wrapping low-level exceptions in higher-level ones
• Preserving error context across abstraction layers
• Library APIs that want to raise their own exception types

Key Concepts:
• RuntimeError: Processing failed Common uses: • Wrapping low-level exceptions in higher-level ones • Preserving error context across abstraction layers • Library APIs that want to raise their own exception types

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q42: exception __traceback__
  (_i: number) => ({
    q: `try:\n    raise ValueError\nexcept ValueError as e:\n    tb = e.__traceback__\n\nWhat is e.__traceback__?`,
    o: ["The traceback object", "The error message string", "The exception class", "None"],
    c: 0,
    e: "e.__traceback__ is the traceback object containing the call stack at the point where the exception was raised.",
    de: `Every exception object in Python has a __traceback__ attribute that holds a traceback object. This traceback records the call stack at the point where the exception was raised, allowing programmatic inspection of the error location.

Key concepts:
• __traceback__ is set when the exception is raised
• It is a traceback object (not a string)
• Contains frame, line number, and file information
• Can be used with the traceback module for formatting

How it works:
• raise ValueError creates an exception and sets __traceback__
• except ValueError as e: catches it
• e.__traceback__ is the traceback object
• Use traceback.format_tb(e.__traceback__) to get a formatted string

Example:
>>> import traceback
>>> try:
...     raise ValueError("test")
... except ValueError as e:
...     tb = e.__traceback__
...     print(type(tb))
...     print(traceback.format_tb(tb))
<class 'traceback'>
['  File "<stdin>", line 2, in <module>\\n']

Common uses:
• Logging exception tracebacks programmatically
• Custom error reporting systems
• Serializing error information for remote debugging

Key Concepts:
• print(traceback.format_tb(tb)) <class 'traceback'> [' File "<stdin>", line 2, in <module>\\n'] Common uses: • Logging exception tracebacks programmatically • Custom error reporting systems • Serializing error information for remote debugging

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q43: traceback.format_exc()
  (_i: number) => ({
    q: `import traceback\n\ntry:\n    1/0\nexcept:\n    s = traceback.format_exc()\n\nWhat is s?`,
    o: ["Formatted traceback string of the current exception", "The exception object", "A list of frames", "None"],
    c: 0,
    e: "traceback.format_exc() returns the formatted traceback of the current exception as a string.",
    de: `traceback.format_exc() captures the current exception's traceback and returns it as a formatted string, exactly as it would appear in the default Python error output.

Key concepts:
• Returns a string (not a traceback object)
• Must be called inside an except block (or when an exception is active)
• Includes the exception type, message, and full stack trace
• Returns "NoneType: None" if no exception is active

How it works:
• 1/0 raises ZeroDivisionError
• except: catches it
• traceback.format_exc() calls sys.exc_info() internally
• Formats the traceback into a human-readable string
• The string includes file, line number, code, and exception info

Example:
>>> import traceback
>>> try:
...     1/0
... except:
...     s = traceback.format_exc()
>>> print(s)
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
ZeroDivisionError: division by zero

Common uses:
• Logging exception details to files
• Sending error reports to monitoring systems
• Custom error pages in web applications

Key Concepts:
• s = traceback.format_exc() >>> print(s) Traceback (most recent call last): File "<stdin>", line 2, in <module> ZeroDivisionError: division by zero Common uses: • Logging exception details to files • Sending error reports to monitoring systems • Custom error pages in web applications

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q44: sys.exc_info()
  (_i: number) => ({
    q: `try:\n    1/0\nexcept:\n    import sys\n    info = sys.exc_info()\n\nWhat does sys.exc_info() return?`,
    o: ["A (type, value, traceback) tuple", "The exception message string", "The exception object only", "A list of error codes"],
    c: 0,
    e: "sys.exc_info() returns a tuple of (exception type, exception value, traceback object).",
    de: `sys.exc_info() returns a tuple of three values describing the current exception being handled: the exception type (class), the exception value (instance), and the traceback object.

Key concepts:
• Returns (type, value, traceback) tuple
• type: the exception class (e.g., ZeroDivisionError)
• value: the exception instance (e.g., ZeroDivisionError('division by zero'))
• traceback: the traceback object
• Returns (None, None, None) if no exception is active

How it works:
• 1/0 raises ZeroDivisionError
• Inside except: sys.exc_info() captures the current exception
• info[0] is <class 'ZeroDivisionError'>
• info[1] is ZeroDivisionError('division by zero')
• info[2] is the traceback object

Example:
>>> import sys
>>> try:
...     1/0
... except:
...     exc_type, exc_val, exc_tb = sys.exc_info()
...     print(exc_type)
...     print(exc_val)
<class 'ZeroDivisionError'>
division by zero

Common uses:
• Low-level exception handling
• Custom logging frameworks
• The traceback module uses this internally
• Useful when you need all three pieces of exception info

Key Concepts:
• print(exc_val) <class 'ZeroDivisionError'> division by zero Common uses: • Low-level exception handling • Custom logging frameworks • The traceback module uses this internally • Useful when you need all three pieces of exception info

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q45: Custom exception with extra data
  (_i: number) => ({
    q: `class AppError(Exception):\n    def __init__(self, msg, code):\n        super().__init__(msg)\n        self.code = code\n\ne = AppError("fail", 404)\ne.code`,
    o: ["404", "fail", "AppError", "Error"],
    c: 0,
    e: "The custom exception stores extra data — e.code is 404.",
    de: `Custom exceptions can carry additional data beyond the standard error message. Here, AppError extends Exception and adds a 'code' attribute that stores an error code alongside the message.

Key concepts:
• Custom exceptions inherit from Exception
• super().__init__(msg) sets the standard message
• self.code = code adds custom data
• The exception works normally with try/except AND has extra attributes

How it works:
• AppError("fail", 404) creates an instance
• super().__init__("fail") stores "fail" as the message
• self.code = 404 stores the code
• e.code returns 404
• str(e) returns "fail"

Example:
>>> class AppError(Exception):
...     def __init__(self, msg, code):
...         super().__init__(msg)
...         self.code = code
>>> e = AppError("Not Found", 404)
>>> e.code
404
>>> str(e)
'Not Found'
>>> try:
...     raise AppError("Unauthorized", 401)
... except AppError as err:
...     print(f"Error {err.code}: {err}")
Error 401: Unauthorized

Common uses:
• HTTP error codes in web frameworks
• Database error codes
• Application-specific error categories
• Structured error reporting

Key Concepts:
• print(f"Error {err.code}: {err}") Error 401: Unauthorized Common uses: • HTTP error codes in web frameworks • Database error codes • Application-specific error categories • Structured error reporting

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q46: Bare except catches everything
  (_i: number) => ({
    q: `What does a bare except: clause catch?`,
    o: ["All exceptions including SystemExit and KeyboardInterrupt", "Only standard exceptions", "Only Exception subclasses", "Only TypeError and ValueError"],
    c: 0,
    e: "Bare except: catches ALL exceptions, including SystemExit and KeyboardInterrupt — which is why it should be avoided.",
    de: `A bare except: clause (without specifying an exception type) catches every exception, including BaseException subclasses like SystemExit, KeyboardInterrupt, and GeneratorExit. This is generally considered bad practice.

Key concepts:
• Bare except: is equivalent to except BaseException:
• Catches SystemExit (sys.exit() calls)
• Catches KeyboardInterrupt (Ctrl+C)
• Catches GeneratorExit
• Makes programs hard to stop and debug

How it works:
• Python's exception hierarchy: BaseException → Exception → specific types
• Bare except catches at the BaseException level
• This means Ctrl+C (KeyboardInterrupt) is caught and silenced
• sys.exit() (SystemExit) is caught and prevented

Example:
>>> try:
...     import sys
...     sys.exit(0)  # SystemExit
... except:
...     print("Caught!")  # This catches SystemExit!
Caught!
# Program does NOT exit — SystemExit was caught!

>>> # Better practice:
>>> try:
...     risky_code()
... except Exception:  # Does NOT catch SystemExit, KeyboardInterrupt
...     handle_error()

Common uses:
• Avoid bare except in production code
• Use except Exception: instead
• Only use bare except for truly last-resort error handling

Key Concepts:
• handle_error() Common uses: • Avoid bare except in production code • Use except Exception: instead • Only use bare except for truly last-resort error handling

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q47: except Exception vs bare except
  (_i: number) => ({
    q: `except Exception: catches what compared to bare except:?`,
    o: ["All exceptions except SystemExit, KeyboardInterrupt, GeneratorExit", "Exactly the same as bare except", "Only TypeError and ValueError", "Nothing"],
    c: 0,
    e: "except Exception: catches all exceptions EXCEPT SystemExit, KeyboardInterrupt, and GeneratorExit.",
    de: `except Exception: catches all exceptions that inherit from Exception, which includes the vast majority of errors you encounter. However, it does NOT catch BaseException subclasses that are not Exception subclasses: SystemExit, KeyboardInterrupt, and GeneratorExit.

Key concepts:
• Python exception hierarchy:
  BaseException
  ├── SystemExit           (NOT caught by except Exception)
  ├── KeyboardInterrupt    (NOT caught by except Exception)
  ├── GeneratorExit        (NOT caught by except Exception)
  └── Exception            (caught)
      ├── ValueError
      ├── TypeError
      ├── RuntimeError
      └── ... all other standard exceptions

How it works:
• except Exception: only catches Exception and its subclasses
• SystemExit, KeyboardInterrupt, GeneratorExit inherit from BaseException directly
• This means Ctrl+C still works (KeyboardInterrupt propagates)
• sys.exit() still works (SystemExit propagates)

Example:
>>> try:
...     import sys
...     sys.exit(0)
... except Exception:
...     print("Not caught!")
# Program exits — SystemExit is NOT caught by except Exception

>>> try:
...     raise ValueError("test")
... except Exception as e:
...     print("Caught:", e)
Caught: test

Common uses:
• Preferred over bare except for general error handling
• Allows Ctrl+C and sys.exit() to work normally
• Best practice for catch-all error handling

Key Concepts:
• print("Caught:", e) Caught: test Common uses: • Preferred over bare except for general error handling • Allows Ctrl+C and sys.exit() to work normally • Best practice for catch-all error handling

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q48: EAFP
  (_i: number) => ({
    q: `What does EAFP stand for in Python?`,
    o: ["Easier to Ask Forgiveness than Permission", "Error And Failure Prevention", "Exception Aware Function Protocol", "Explicit Action For Processing"],
    c: 0,
    e: "EAFP means 'Easier to Ask Forgiveness than Permission' — the try/except coding style.",
    de: `EAFP stands for "Easier to Ask Forgiveness than Permission." It is a Python coding style where you assume an operation will work and handle the exception if it doesn't, rather than checking preconditions first.

Key concepts:
• EAFP = try the operation, catch the exception if it fails
• Contrasted with LBYL (Look Before You Leap)
• Considered Pythonic (the preferred Python style)
• Uses try/except instead of if/check

How it works:
• Instead of checking if something is valid before doing it
• Just do it and catch the error if it happens
• Often faster when the common case is success
• More readable for complex validation scenarios

Example:
# EAFP style (Pythonic)
try:
    value = my_dict["key"]
except KeyError:
    value = "default"

# LBYL style (less Pythonic)
if "key" in my_dict:
    value = my_dict["key"]
else:
    value = "default"

# EAFP with file operations
try:
    with open("config.json") as f:
        config = json.load(f)
except FileNotFoundError:
    config = default_config

Common uses:
• Dictionary access (try/except KeyError vs checking 'in')
• File operations (try/except vs os.path.exists)
• Type conversions (try int(x) vs checking isdigit())
• Attribute access (try/except AttributeError vs hasattr())

Key Concepts:
• Key concepts: • EAFP = try the operation, catch the exception if it fails • Contrasted with LBYL (Look Before You Leap) • Considered Pythonic (the preferred Python style) • Uses try/except instead of if/check How it works: • Instead of checking if something is valid before doing it • Just do it and catch the error if it happens • Often faster when the common case is success • More readable for complex validation scenarios Example: # EAFP style (Pythonic) try: value = my_dict["key"] except KeyError: value = "default" # LBYL style (less Pythonic) if "key" in my_dict: value = my_dict["key"] else: value = "default" # EAFP with file operations try: with open("config.json") as f: config = json.load(f) except FileNotFoundError: config = default_config Common uses: • Dictionary access (try/except KeyError vs checking 'in') • File operations (try/except vs os.path.exists) • Type conversions (try int(x) vs checking isdigit()) • Attribute access (try/except AttributeError vs hasattr())

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),

  // Q49: LBYL
  (_i: number) => ({
    q: `What does LBYL stand for in Python?`,
    o: ["Look Before You Leap", "Load Before You Launch", "Log Before You Leave", "Lock Before You Loop"],
    c: 0,
    e: "LBYL means 'Look Before You Leap' — checking conditions before performing an operation.",
    de: `LBYL stands for "Look Before You Leap." It is a coding style where you check preconditions before performing an operation, rather than catching exceptions after the fact. While valid, LBYL is generally considered less Pythonic than EAFP.

Key concepts:
• LBYL = check conditions before acting
• Uses if/else instead of try/except
• More common in other languages (Java, C++)
• Can have race conditions (check-then-act problem)

How it works:
• Before performing an operation, check if it will succeed
• Use conditional statements (if) to verify preconditions
• Only proceed if the checks pass
• Handle the "can't proceed" case in else

Example:
# LBYL style
if "key" in my_dict:
    value = my_dict["key"]
else:
    value = "default"

# EAFP style (more Pythonic)
try:
    value = my_dict["key"]
except KeyError:
    value = "default"

# LBYL with file operations
import os
if os.path.exists("config.json"):
    with open("config.json") as f:
        config = json.load(f)
else:
    config = default_config

Problems with LBYL:
• Race conditions: file could be deleted between check and open
• Verbose: requires separate check for each possible failure
• Slower when failures are rare (unnecessary checks on every call)

Common uses:
• Simple type checks before operations
• UI input validation
• Cases where failure is common (LBYL avoids exception overhead)
• When the check is simple and atomic

Key Concepts:
• Key concepts: • LBYL = check conditions before acting • Uses if/else instead of try/except • More common in other languages (Java, C++) • Can have race conditions (check-then-act problem) How it works: • Before performing an operation, check if it will succeed • Use conditional statements (if) to verify preconditions • Only proceed if the checks pass • Handle the "can't proceed" case in else Example: # LBYL style if "key" in my_dict: value = my_dict["key"] else: value = "default" # EAFP style (more Pythonic) try: value = my_dict["key"] except KeyError: value = "default" # LBYL with file operations import os if os.path.exists("config.json"): with open("config.json") as f: config = json.load(f) else: config = default_config Problems with LBYL: • Race conditions: file could be deleted between check and open • Verbose: requires separate check for each possible failure • Slower when failures are rare (unnecessary checks on every call) Common uses: • Simple type checks before operations • UI input validation • Cases where failure is common (LBYL avoids exception overhead) • When the check is simple and atomic

Key Distinctions:
• Compare with related operations, types, or patterns and similar constructs.
• Distinguish this from others that learners might confuse.

How It Works:
• Python evaluates or executes the construct according to its semantics.
• The result or side effect is produced as defined for that construct.

Step-by-Step Execution:
1. Any subexpressions or prerequisites are evaluated or executed first.
2. The main operation or construct is applied.
3. The operation completes and returns a value or produces a side effect (or None, if applicable).
4. In the REPL or in an assignment, the result is displayed or stored.

Order of Operations:
1. Literals and innermost subexpressions are evaluated first, from left to right where applicable.
2. Function or method calls are evaluated: arguments left to right, then the call is performed.
3. The operation completes and produces its return value or effect.
4. No other operators or operands remain in this expression once the call or construct finishes.
5. Display or use of the result happens after the full expression or statement has been evaluated.

Common Use Cases:
• Using this pattern in real code; teaching the concept; validating behavior with different inputs.

Edge Cases:
• See the explanation above for edge cases (e.g. empty values, None, boundaries, exceptions).
• Consider what happens with invalid or boundary inputs where applicable.

Performance Considerations:
• Built-in operations are highly optimized in CPython.
• For hot paths, avoid repeated heavy work; consider caching or simpler patterns when possible.

Examples:
• See the example(s) above; try the same pattern with related values or expressions to reinforce understanding.

Notes:
• Follow PEP 8 and best practices; refer to the official docs for full details.`
  }),
];
