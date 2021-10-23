---
layout: page
title: Projects
permalink: /projects
---

## A Meeting List for any Platform

Whether you use Wordpress or Django, or any other web platform, we have an open-source solution to help you publish recovery meeting information, so that addicts can meet and recover from addiction.

### 12 Step Meeting List Wordpress Plugin `Production`

12 Step Meeting List (TSML) is an open-source WordPress plugin that helps recovery organizations list their local weekly meetings. TSML entered production for Santa Clara County AA on May 2, 2014, and was made available on the WordPress Plugin Directory exactly one year later. It is currently in use by hundreds of recovery organizations.

- [Demo](https://demo.code4recovery.org/meetings)
- [WordPress Plugin Directory](https://wordpress.org/plugins/12-step-meeting-list)
- [Source code on Github](https://github.com/code4recovery/12-step-meeting-list) (PHP / WordPress)

&nbsp;

---

&nbsp;

### Spec `Production`

Code for Recovery maintains the Meeting Guide JSON spec, which is a standard for communicating information about recovery meetings.

- [Documentation on Github](https://github.com/code4recovery/spec)

&nbsp;

---

&nbsp;

### TSML UI `Production`

TSML UI takes the basic meeting finder concepts established in TSML and only renders the front-end user interface (UI). The power of this is that it enables websites not running WordPress to benefit from TSML's user-friendly interface.

Eventually this will become the default front-end for TSML.

- [Demo](https://demo.code4recovery.org/tsml-ui)
- [Configuration helper](https://tsml-ui-config.netlify.app)
- [Source code on Github](https://github.com/code4recovery/tsml-ui) (React JS)

&nbsp;

---

&nbsp;

### API Gateway `Development`

Project description to come

- Links to come

&nbsp;

---

&nbsp;

### Online Meeting List `Production`

Online Meeting List is a meeting finder front-end specifically designed for the needs of an international listing of online recovery meetings.

Its primary distinguishing characteristic is that it converts and sorts listings in the user's local timezone.

- [Online Intergroup](https://aa-intergroup.org/meetings)
- [Source code on Github](https://github.com/code4recovery/online-meeting-list) (React / TypeScript)

&nbsp;

---

&nbsp;

### PDF `Production`

This project takes a Meeting Guide-spec JSON feed and generates a printable PDF for just the in-person meetings, grouped chronologically by day and then by region.

- [Link](https://pdf.code4recovery.org/)
- [Source code on Github](https://github.com/code4recovery/pdf) (PHP / Laravel)

&nbsp;

---

&nbsp;

### TSML Enhanced Feedback `Development`

Project description to come

- Links to come

&nbsp;

---

&nbsp;

### Sheets `Production`

This project fetches meeting data from Google Sheets using the `v4` API and transforms it into a CORS-enabled minified Meeting Guide-spec JSON file. Currently in use by [Online Intergroup](https://aa-intergroup.org/meetings) and [Santa Clara County AA](https://aasanjose.org/meetings).

- [Log in](https://sheets.code4recovery.org)
- [Source code](https://github.com/code4recovery/sheets) (PHP / Laravel)
