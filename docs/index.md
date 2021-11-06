---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: ""
---



Code for Recovery is a fellowship of volunteers in service building and maintaining open source solutions to help the recovery community meet, organize and recover from addiction.

Here's what we're working on:

- [Meeting finders](#meeting-finders)
  - [12 Step Meeting List `Production`](#12-step-meeting-list-production)
  - [TSML UI `Production`](#tsml-ui-production)
  - [Wagtail Meeting Guide `Production`](#wagtail-meeting-guide-production)
  - [Online Meeting List `Production`](#online-meeting-list-production)
- [Supporting projects](#supporting-projects)
  - [Spec `Production`](#spec-production)
  - [API gateway `Development`](#api-gateway-development)
  - [PDF `Production`](#pdf-production)
  - [TSML Enhanced Feedback `Development`](#tsml-enhanced-feedback-development)
  - [Sheets `Production`](#sheets-production)


## Meeting finders

### 12 Step Meeting List `Production`

12 Step Meeting List (TSML) is an open-source WordPress plugin that helps recovery organizations list their local weekly meetings. TSML entered production for Santa Clara County AA on May 2, 2014, and was made available on the WordPress Plugin Directory exactly one year later. It is currently in use by hundreds of recovery organizations.

- [Demo](https://demo.code4recovery.org/meetings)
- [WordPress Plugin Directory](https://wordpress.org/plugins/12-step-meeting-list)
- [Source code on Github](https://github.com/code4recovery/12-step-meeting-list) (PHP / WordPress)
- [Get help](https://github.com/code4recovery/12-step-meeting-list/discussions) (Python / Django)

&nbsp;

---

&nbsp;

### TSML UI `Production`

TSML UI takes the basic meeting finder concepts established in TSML and renders only the front-end user interface (UI). The power of this is that it enables websites running on platforms other than WordPress to benefit from TSML's user-friendly interface.

Eventually this may become the default front-end for TSML.

- [Demo](https://demo.code4recovery.org/tsml-ui)
- [Configuration helper](https://tsml-ui.code4recovery.org)
- [Source code on Github](https://github.com/code4recovery/tsml-ui) (React JS)
- [Get help](https://github.com/code4recovery/tsml-ui/issues) (React JS)

&nbsp;

---

&nbsp;

### Wagtail Meeting Guide `Production`

Wagtail Meeting Guide is a Django-based content management system currently in use by the Southeast Pennsylvania Intergroup Association to list meetings and provide other back-office functionality.

- [SEPIA](https://aasepia.org/)
- [Source code on Github](https://github.com/code4recovery/wagtail-meeting-guide) (React / TypeScript)
- [Get help](https://github.com/code4recovery/wagtail-meeting-guide/issues) (Python / Django)

&nbsp;

---

&nbsp;

### Online Meeting List `Production`

Online Meeting List is a meeting finder front-end specifically designed for the needs of an international listing of online recovery meetings.

Its primary distinguishing characteristic is that it converts and sorts listings in the user's local timezone.

- [Online Intergroup](https://aa-intergroup.org/meetings)
- [Source code on Github](https://github.com/code4recovery/online-meeting-list) (React / TypeScript)
- [Get help](https://github.com/code4recovery/online-meeting-list/issues)

&nbsp;

---

&nbsp;

## Supporting projects

### Spec `Production`

Code for Recovery maintains the Meeting Guide JSON spec, which is a standard for communicating information about recovery meetings.

- [Documentation on Github](https://github.com/code4recovery/spec)

&nbsp;

---

&nbsp;

### API gateway `Development`

API gateteway is a service in development that will provide access to geocoding—and potentially other—API services for recovery fellowship meetings.

- [Source code on Github](https://github.com/code4recovery/api-gateway) (Node / TypeScript)
- [Get help](https://github.com/code4recovery/api-gateway/issues)

&nbsp;

---

&nbsp;

### PDF `Production`

This project takes a Meeting Guide-spec JSON feed and generates a printable PDF for just the in-person meetings, grouped chronologically by day and then by region.

- [Link](https://pdf.code4recovery.org/)
- [Source code on Github](https://github.com/code4recovery/pdf) (PHP / Laravel)
- [Get help](https://github.com/code4recovery/pdf/issues) (PHP / Laravel)

&nbsp;

---

&nbsp;

### TSML Enhanced Feedback `Development`

This WordPress plugin will provide a richer experience for users to provide feedback about a meeting.

- [Source code on Github](https://github.com/code4recovery/12-step-meeting-list-feedback-enhancement) (PHP / WordPress)
- [Get help](https://github.com/code4recovery/12-step-meeting-list-feedback-enhancement/issues) (PHP / Laravel)

&nbsp;

---

&nbsp;

### Sheets `Production`

This project fetches meeting data from Google Sheets using the `v4` API and transforms it into a CORS-enabled minified Meeting Guide-spec JSON file. Currently in use by [Online Intergroup](https://aa-intergroup.org/meetings) and [Santa Clara County AA](https://aasanjose.org/meetings).

- [Log in](https://sheets.code4recovery.org)
- [Source code](https://github.com/code4recovery/sheets) (PHP / Laravel)
- [Get help](https://github.com/code4recovery/sheets/issues) (PHP / Laravel)
