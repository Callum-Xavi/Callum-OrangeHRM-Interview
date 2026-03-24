
# OrangeHRM Test Automation Framework - Callum Mander

<h2> Objective

This repository contains a strcutured test automation framework developped to execute an end-to-end test scenario within OrangeHRM live demo site. The framework is designed to evaluate core functional flows - specifically navigating to and searching within the Leave section, while demonstrating modern automation best practises.

Engineering Decisions and Strategy

For discovery phase, several decisions were made regarding tooling, state management, and execution:

1. Tooling: Playwright over Jest
while Jest is a powerful runner, I chose to  use Playwright's native test runner exclusively

**justification:** Playwright's native runner has built in support for broiwser context isolation, auto waiting, and artifact generation (traces, vids, html reporting) I think introducing Jest would add unnecessary dependancy baggage for a UI focussed framework.

2. State and data management
I am not conmpletley sure but it seems like the site sits within a sandbox?? The site is a live demo site (open source)

**Approach:** When looking at the api documentation online for OrangeHRM, I noticed the API documentation specifically intructs developers its unavailable for open source projects (Prof and Enterprise only) Therefore, seeding api based test data is not applicable. The tests I use will rely on the static demo credentials - executes entirely via the UI, and with effort to try and be resilient to changes of state from changing data states.

3. Definition of done

I have decided that a test in this framework is only considered "done" when it meets the following criteria:
<li>
    <ul> It passes or fails in a virtual/CI environment</ul>
    <ul> It captures a screenshot of the final UI interaction before teardown</ul>
    <ul> It generates a trace log for developer debugging</ul>
    <ul> It compiles an aggregated, clean HTML report in the /reports directory</ul>
</li>


Test Scenario Implemented

**Gherkin scenario**
<li>
    <ol> Given Alice logs into OrangeHM</ol>
    <ol> When Alice navigates to Leave</ol>
    <ol> When Alice navigates to the leave list</ol>
    <ol> Then Alice can set a date range</ol>
    <ol> And Alice can search for a scheduled leave</ol>
</li>

Getting Started
prerequisites:
node.js v18 or higher
npm or yarn

Installation:
1. clone the repo
git clone **Repo URL HERE**

2. npm install

3. npx playwright install --with-deps

Execution instructions:
npx playwright test

if end users prefer to run tests with UI mode
npx playwright test --ui

Viewing the report and the artefacts
npx playwright show-report

