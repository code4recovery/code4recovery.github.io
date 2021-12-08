---
layout: page
title: Join Us
permalink: /join
---

Are you a developer in recovery? Please email [info@code4recovery.org](mailto:info@code4recovery.org) and request an invitation to join our Slack workspace.

You are welcome to contribute to one of [our ongoing projects](/projects), or start your own.

We have regular meetings on Zoom every other Saturday at 12pm US Central time. The next meeting will be held on <span id="next-meeting" style="text-decoration:underline;"></span>.

<script id="luxon" src="https://cdnjs.cloudflare.com/ajax/libs/luxon/2.0.2/luxon.min.js" integrity="sha512-frUCURIeB0OKMPgmDEwT3rC4NH2a4gn06N3Iw6T1z0WfrQZd7gNfJFbHrNsZP38PVXOp6nUiFtBqVvmCj+ARhw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
    var dt = luxon.DateTime.fromObject({
        year: 2021,
        month: 12,
        day: 4,
        hour: 12,
        minute: 0
    }, {
        zone: 'America/Chicago'
    });
    var weeks = 2 * Math.ceil(luxon.DateTime.now().diff(dt, 'weeks').toObject().weeks / 2);
    document.getElementById('next-meeting').innerHTML = dt.plus({weeks: weeks}).toFormat('LLLL d');
</script>
