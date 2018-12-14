# Contributing to Fyt

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Fyt. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Fyt and Packages](#Fyt-and-packages)
  * [Fyt Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [CoffeeScript Styleguide](#coffeescript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)


## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Fyt. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](ISSUE_TEMPLATE.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#Fyt-and-packages) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started Fyt, e.g. which command exactly you used in the terminal, or how you started Fyt otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an Fyt command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/Fyt/keybinding-resolver) shown**. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that Fyt crashed**, include a crash report with a stack trace from the operating system. On macOS, the crash report will be available in `Console.app` under "Diagnostic and usage information" > "User diagnostic reports". Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem is related to performance or memory**, include a [CPU profile capture](https://flight-manual.Fyt.io/hacking-Fyt/sections/debugging/#diagnose-runtime-performance) with your report.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of Fyt) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of Fyt?** What's the most recent version in which the problem doesn't happen? You can download older versions of Fyt from [the releases page](https://github.com/Fyt/Fyt/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

* **Which version of Fyt are you using?** You can get the exact version by running `Fyt -v` in your terminal, or by starting Fyt and running the `Application: About` command from the [Command Palette](https://github.com/Fyt/command-palette).
* **What's the name and version of the OS you're using**?
* **Are you using [local configuration files](https://flight-manual.Fyt.io/using-Fyt/sections/basic-customization/)** `config.cson`, `keymap.cson`, `snippets.cson`, `styles.less` and `init.coffee` to customize Fyt? If so, provide the contents of those files, preferably in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines) or with a link to a [gist](https://gist.github.com/).
* **Which keyboard layout are you using?** Are you using a US layout or some other layout?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Fyt, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check the [debugging guide](https://flight-manual.Fyt.io/hacking-Fyt/sections/debugging/)** for tips — you might discover that the enhancement is already available. Most importantly, check if you're using [the latest version of Fyt](https://flight-manual.Fyt.io/hacking-Fyt/sections/debugging/#update-to-the-latest-version) and if you can get the desired behavior by changing [Fyt's or packages' config settings](https://flight-manual.Fyt.io/hacking-Fyt/sections/debugging/#check-Fyt-and-package-settings).
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3AFyt)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#Fyt-and-packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Fyt which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most Fyt users and isn't something that can or should be implemented as a [community package](#Fyt-and-packages).
* **List some other text editors or applications where this enhancement exists.**
* **Specify which version of Fyt you're using.** You can get the exact version by running `Fyt -v` in your terminal, or by starting Fyt and running the `Application: About` command from the [Command Palette](https://github.com/Fyt/command-palette).
* **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to Fyt? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

If you want to read about using Fyt or developing packages in Fyt, the [Fyt Flight Manual](https://flight-manual.Fyt.io) is free and available online. You can find the source to the manual in [Fyt/flight-manual.Fyt.io](https://github.com/Fyt/flight-manual.Fyt.io).

#### Local development

Fyt Core and all packages can be developed locally. For instructions on how to do this, see the following sections in the [Fyt Flight Manual](https://flight-manual.Fyt.io):

* [Hacking on Fyt Core][hacking-on-Fyt-core]
* [Contributing to Official Fyt Packages][contributing-to-official-Fyt-packages]

### Pull Requests

The process described here has several goals:

- Maintain Fyt's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Fyt
- Enable a sustainable system for Fyt's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :apple: `:apple:` when fixing something on iOS
    * :evergreen_tree: `:evergreen_tree:` when fixing something on Android
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with `static`)
    * Instance methods and properties
* [Avoid platform-dependent code](https://flight-manual.Fyt.io/hacking-Fyt/sections/cross-platform-compatibility/)

### CoffeeScript Styleguide

* Set parameter defaults without spaces around the equal sign
    * `clear = (count=1) ->` instead of `clear = (count = 1) ->`
* Use spaces around operators
    * `count + 1` instead of `count+1`
* Use spaces after commas (unless separated by newlines)
* Use parentheses if it improves code clarity.
* Prefer alphabetic keywords to symbolic keywords:
    * `a is b` instead of `a == b`
* Avoid spaces inside the curly-braces of hash literals:
    * `{a: 1, b: 2}` instead of `{ a: 1, b: 2 }`
* Include a single line of whitespace between methods.
* Capitalize initialisms and acronyms in names, except for the first word, which
  should be lower-case:
  * `getURI` instead of `getUri`
  * `uriToOpen` instead of `URIToOpen`
* Use `slice()` to copy an array
* Add an explicit `return` when your function ends with a `for`/`while` loop and
  you don't want it to return a collected array.
* Use `this` instead of a standalone `@`
  * `return this` instead of `return @`
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with a `@`)
    * Instance methods and properties
* [Avoid platform-dependent code](https://flight-manual.Fyt.io/hacking-Fyt/sections/cross-platform-compatibility/)

### Specs Styleguide

- Include thoughtfully-worded, well-structured [Jasmine](https://jasmine.github.io/) specs in the `./spec` folder.
- Treat `describe` as a noun or situation.
- Treat `it` as a statement about state or how an operation changes state.

#### Example

```coffee
describe 'a dog', ->
 it 'barks', ->
 # spec here
 describe 'when the dog is happy', ->
  it 'wags its tail', ->
  # spec here
```

### Documentation Styleguide

* Use [FytDoc](https://github.com/Fyt/Fytdoc).
* Use [Markdown](https://daringfireball.net/projects/markdown).
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`
    * Reference class methods with `{ClassName.methodName}`

#### Example

```coffee
# Public: Disable the package with the given name.
#
# * `name`    The {String} name of the package to disable.
# * `options` (optional) The {Object} with disable options (default: {}):
#   * `trackTime`     A {Boolean}, `true` to track the amount of time taken.
#   * `ignoreErrors`  A {Boolean}, `true` to catch and ignore errors thrown.
# * `callback` The {Function} to call after the package has been disabled.
#
# Returns `undefined`.
disablePackage: (name, options, callback) ->
```

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all Fyt repositories, but some are specific to `Fyt/Fyt`.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in [open issues across `Fyt/Fyt` and all Fyt-owned packages which are labeled as bugs, but still need to be reliably reproduced](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Abug+label%3Aneeds-reproduction) or perhaps [open pull requests in `Fyt/Fyt` which haven't been reviewed yet](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+repo%3AFyt%2FFyt+comments%3A0). To help you find issues and pull requests, each label is listed with search links for finding open items with that label in `Fyt/Fyt` only and also across all Fyt repositories. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

Please open an issue on `Fyt/Fyt` if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue on that repository.

#### Type of Issue and Issue State

| Label name | `Fyt/Fyt` :mag_right: | `Fyt`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `enhancement` | [search][search-Fyt-repo-label-enhancement] | [search][search-Fyt-org-label-enhancement] | Feature requests. |
| `bug` | [search][search-Fyt-repo-label-bug] | [search][search-Fyt-org-label-bug] | Confirmed bugs or reports that are very likely to be bugs. |
| `question` | [search][search-Fyt-repo-label-question] | [search][search-Fyt-org-label-question] | Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | [search][search-Fyt-repo-label-feedback] | [search][search-Fyt-org-label-feedback] | General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-Fyt-repo-label-help-wanted] | [search][search-Fyt-org-label-help-wanted] | The Fyt core team would appreciate help from the community in resolving these issues. |
| `beginner` | [search][search-Fyt-repo-label-beginner] | [search][search-Fyt-org-label-beginner] | Less complex issues which would be good first issues to work on for users who want to contribute to Fyt. |
| `more-information-needed` | [search][search-Fyt-repo-label-more-information-needed] | [search][search-Fyt-org-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | [search][search-Fyt-repo-label-needs-reproduction] | [search][search-Fyt-org-label-needs-reproduction] | Likely bugs, but haven't been reliably reproduced. |
| `blocked` | [search][search-Fyt-repo-label-blocked] | [search][search-Fyt-org-label-blocked] | Issues blocked on other issues. |
| `duplicate` | [search][search-Fyt-repo-label-duplicate] | [search][search-Fyt-org-label-duplicate] | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix` | [search][search-Fyt-repo-label-wontfix] | [search][search-Fyt-org-label-wontfix] | The Fyt core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid` | [search][search-Fyt-repo-label-invalid] | [search][search-Fyt-org-label-invalid] | Issues which aren't valid (e.g. user errors). |
| `package-idea` | [search][search-Fyt-repo-label-package-idea] | [search][search-Fyt-org-label-package-idea] | Feature request which might be good candidates for new packages, instead of extending Fyt or core Fyt packages. |
| `wrong-repo` | [search][search-Fyt-repo-label-wrong-repo] | [search][search-Fyt-org-label-wrong-repo] | Issues reported on the wrong repository (e.g. a bug related to the [Settings View package](https://github.com/Fyt/settings-view) was reported on [Fyt core](https://github.com/Fyt/Fyt)). |

#### Topic Categories

| Label name | `Fyt/Fyt` :mag_right: | `Fyt`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `windows` | [search][search-Fyt-repo-label-windows] | [search][search-Fyt-org-label-windows] | Related to Fyt running on Windows. |
| `linux` | [search][search-Fyt-repo-label-linux] | [search][search-Fyt-org-label-linux] | Related to Fyt running on Linux. |
| `mac` | [search][search-Fyt-repo-label-mac] | [search][search-Fyt-org-label-mac] | Related to Fyt running on macOS. |
| `documentation` | [search][search-Fyt-repo-label-documentation] | [search][search-Fyt-org-label-documentation] | Related to any type of documentation (e.g. [API documentation](https://Fyt.io/docs/api/latest/) and the [flight manual](https://flight-manual.Fyt.io/)). |
| `performance` | [search][search-Fyt-repo-label-performance] | [search][search-Fyt-org-label-performance] | Related to performance. |
| `security` | [search][search-Fyt-repo-label-security] | [search][search-Fyt-org-label-security] | Related to security. |
| `ui` | [search][search-Fyt-repo-label-ui] | [search][search-Fyt-org-label-ui] | Related to visual design. |
| `api` | [search][search-Fyt-repo-label-api] | [search][search-Fyt-org-label-api] | Related to Fyt's public APIs. |
| `uncaught-exception` | [search][search-Fyt-repo-label-uncaught-exception] | [search][search-Fyt-org-label-uncaught-exception] | Issues about uncaught exceptions, normally created from the [Notifications package](https://github.com/Fyt/notifications). |
| `crash` | [search][search-Fyt-repo-label-crash] | [search][search-Fyt-org-label-crash] | Reports of Fyt completely crashing. |
| `auto-indent` | [search][search-Fyt-repo-label-auto-indent] | [search][search-Fyt-org-label-auto-indent] | Related to auto-indenting text. |
| `encoding` | [search][search-Fyt-repo-label-encoding] | [search][search-Fyt-org-label-encoding] | Related to character encoding. |
| `network` | [search][search-Fyt-repo-label-network] | [search][search-Fyt-org-label-network] | Related to network problems or working with remote files (e.g. on network drives). |
| `git` | [search][search-Fyt-repo-label-git] | [search][search-Fyt-org-label-git] | Related to Git functionality (e.g. problems with gitignore files or with showing the correct file status). |

#### `Fyt/Fyt` Topic Categories

| Label name | `Fyt/Fyt` :mag_right: | `Fyt`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `editor-rendering` | [search][search-Fyt-repo-label-editor-rendering] | [search][search-Fyt-org-label-editor-rendering] | Related to language-independent aspects of rendering text (e.g. scrolling, soft wrap, and font rendering). |
| `build-error` | [search][search-Fyt-repo-label-build-error] | [search][search-Fyt-org-label-build-error] | Related to problems with building Fyt from source. |
| `error-from-pathwatcher` | [search][search-Fyt-repo-label-error-from-pathwatcher] | [search][search-Fyt-org-label-error-from-pathwatcher] | Related to errors thrown by the [pathwatcher library](https://github.com/Fyt/node-pathwatcher). |
| `error-from-save` | [search][search-Fyt-repo-label-error-from-save] | [search][search-Fyt-org-label-error-from-save] | Related to errors thrown when saving files. |
| `error-from-open` | [search][search-Fyt-repo-label-error-from-open] | [search][search-Fyt-org-label-error-from-open] | Related to errors thrown when opening files. |
| `installer` | [search][search-Fyt-repo-label-installer] | [search][search-Fyt-org-label-installer] | Related to the Fyt installers for different OSes. |
| `auto-updater` | [search][search-Fyt-repo-label-auto-updater] | [search][search-Fyt-org-label-auto-updater] | Related to the auto-updater for different OSes. |
| `deprecation-help` | [search][search-Fyt-repo-label-deprecation-help] | [search][search-Fyt-org-label-deprecation-help] | Issues for helping package authors remove usage of deprecated APIs in packages. |
| `electron` | [search][search-Fyt-repo-label-electron] | [search][search-Fyt-org-label-electron] | Issues that require changes to [Electron](https://electron.Fyt.io) to fix or implement. |

#### Pull Request Labels

| Label name | `Fyt/Fyt` :mag_right: | `Fyt`‑org :mag_right: | Description
| --- | --- | --- | --- |
| `work-in-progress` | [search][search-Fyt-repo-label-work-in-progress] | [search][search-Fyt-org-label-work-in-progress] | Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | [search][search-Fyt-repo-label-needs-review] | [search][search-Fyt-org-label-needs-review] | Pull requests which need code review, and approval from maintainers or Fyt core team. |
| `under-review` | [search][search-Fyt-repo-label-under-review] | [search][search-Fyt-org-label-under-review] | Pull requests being reviewed by maintainers or Fyt core team. |
| `requires-changes` | [search][search-Fyt-repo-label-requires-changes] | [search][search-Fyt-org-label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | [search][search-Fyt-repo-label-needs-testing] | [search][search-Fyt-org-label-needs-testing] | Pull requests which need manual testing. |

[search-Fyt-repo-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aenhancement
[search-Fyt-org-label-enhancement]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aenhancement
[search-Fyt-repo-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Abug
[search-Fyt-org-label-bug]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Abug
[search-Fyt-repo-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aquestion
[search-Fyt-org-label-question]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aquestion
[search-Fyt-repo-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Afeedback
[search-Fyt-org-label-feedback]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Afeedback
[search-Fyt-repo-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Ahelp-wanted
[search-Fyt-org-label-help-wanted]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Ahelp-wanted
[search-Fyt-repo-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Abeginner
[search-Fyt-org-label-beginner]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Abeginner
[search-Fyt-repo-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Amore-information-needed
[search-Fyt-org-label-more-information-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Amore-information-needed
[search-Fyt-repo-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aneeds-reproduction
[search-Fyt-org-label-needs-reproduction]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aneeds-reproduction
[search-Fyt-repo-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Atriage-help-needed
[search-Fyt-org-label-triage-help-needed]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Atriage-help-needed
[search-Fyt-repo-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Awindows
[search-Fyt-org-label-windows]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Awindows
[search-Fyt-repo-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Alinux
[search-Fyt-org-label-linux]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Alinux
[search-Fyt-repo-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Amac
[search-Fyt-org-label-mac]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Amac
[search-Fyt-repo-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Adocumentation
[search-Fyt-org-label-documentation]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Adocumentation
[search-Fyt-repo-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aperformance
[search-Fyt-org-label-performance]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aperformance
[search-Fyt-repo-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Asecurity
[search-Fyt-org-label-security]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Asecurity
[search-Fyt-repo-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aui
[search-Fyt-org-label-ui]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aui
[search-Fyt-repo-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aapi
[search-Fyt-org-label-api]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aapi
[search-Fyt-repo-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Acrash
[search-Fyt-org-label-crash]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Acrash
[search-Fyt-repo-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aauto-indent
[search-Fyt-org-label-auto-indent]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aauto-indent
[search-Fyt-repo-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aencoding
[search-Fyt-org-label-encoding]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aencoding
[search-Fyt-repo-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Anetwork
[search-Fyt-org-label-network]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Anetwork
[search-Fyt-repo-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Auncaught-exception
[search-Fyt-org-label-uncaught-exception]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Auncaught-exception
[search-Fyt-repo-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Agit
[search-Fyt-org-label-git]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Agit
[search-Fyt-repo-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Ablocked
[search-Fyt-org-label-blocked]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Ablocked
[search-Fyt-repo-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aduplicate
[search-Fyt-org-label-duplicate]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aduplicate
[search-Fyt-repo-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Awontfix
[search-Fyt-org-label-wontfix]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Awontfix
[search-Fyt-repo-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Ainvalid
[search-Fyt-org-label-invalid]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Ainvalid
[search-Fyt-repo-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Apackage-idea
[search-Fyt-org-label-package-idea]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Apackage-idea
[search-Fyt-repo-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Awrong-repo
[search-Fyt-org-label-wrong-repo]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Awrong-repo
[search-Fyt-repo-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aeditor-rendering
[search-Fyt-org-label-editor-rendering]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aeditor-rendering
[search-Fyt-repo-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Abuild-error
[search-Fyt-org-label-build-error]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Abuild-error
[search-Fyt-repo-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aerror-from-pathwatcher
[search-Fyt-org-label-error-from-pathwatcher]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aerror-from-pathwatcher
[search-Fyt-repo-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aerror-from-save
[search-Fyt-org-label-error-from-save]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aerror-from-save
[search-Fyt-repo-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aerror-from-open
[search-Fyt-org-label-error-from-open]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aerror-from-open
[search-Fyt-repo-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Ainstaller
[search-Fyt-org-label-installer]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Ainstaller
[search-Fyt-repo-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Aauto-updater
[search-Fyt-org-label-auto-updater]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aauto-updater
[search-Fyt-repo-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3AFyt%2FFyt+label%3Adeprecation-help
[search-Fyt-org-label-deprecation-help]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Adeprecation-help
[search-Fyt-repo-label-electron]: https://github.com/search?q=is%3Aissue+repo%3AFyt%2FFyt+is%3Aopen+label%3Aelectron
[search-Fyt-org-label-electron]: https://github.com/search?q=is%3Aopen+is%3Aissue+user%3AFyt+label%3Aelectron
[search-Fyt-repo-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AFyt%2FFyt+label%3Awork-in-progress
[search-Fyt-org-label-work-in-progress]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AFyt+label%3Awork-in-progress
[search-Fyt-repo-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AFyt%2FFyt+label%3Aneeds-review
[search-Fyt-org-label-needs-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AFyt+label%3Aneeds-review
[search-Fyt-repo-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AFyt%2FFyt+label%3Aunder-review
[search-Fyt-org-label-under-review]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AFyt+label%3Aunder-review
[search-Fyt-repo-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AFyt%2FFyt+label%3Arequires-changes
[search-Fyt-org-label-requires-changes]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AFyt+label%3Arequires-changes
[search-Fyt-repo-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+repo%3AFyt%2FFyt+label%3Aneeds-testing
[search-Fyt-org-label-needs-testing]: https://github.com/search?q=is%3Aopen+is%3Apr+user%3AFyt+label%3Aneeds-testing

[beginner]:https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+user%3AFyt+sort%3Acomments-desc
[help-wanted]:https://github.com/search?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+user%3AFyt+sort%3Acomments-desc+-label%3Abeginner
[contributing-to-official-Fyt-packages]:https://flight-manual.Fyt.io/hacking-Fyt/sections/contributing-to-official-Fyt-packages/
[hacking-on-Fyt-core]: https://flight-manual.Fyt.io/hacking-Fyt/sections/hacking-on-Fyt-core/
