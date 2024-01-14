# Class Daily
A webapp for creating classroom routines, and daily schedules.

<div align="center">

[![Hosted on - Supabase](https://img.shields.io/badge/Hosted_on-Supabase-2ea44f?style=for-the-badge&logo=supabase)](https://supabase.com/)

</div>

## Change Log
- 2024/1/14
    - implemented CSV upload only
- 2024/1/11
    - users can now create a class by clicking the + button in the upper-right corner
- 2024/1/x
    - integrated [Supabase](https://supabase.com/) for data storage.
        - https://supabase.com/dashboard/project/igoyfsrthdefyrctcyty
        - connect to the database and use it
        - set up login with social au th
        - set up login with email
        - get realtime up and running
- 2024/1/x
    - can now create routines that are class-dependent or class-independent
    - can now create to the daily schedule (for the current day)
    - can now create a daily schedule for any date in the future
    - can now mark items on the daily schedule complete and they get crossed out with a nice animation
    - daily schedule items can be dragged and dropped to reorder
    - daily schedule items can be unchecked
    - daily schedule items can be pushed to a later date
    - added a week view
    - can now drag and drop days on the week view to move them around
    - added a month view
    - can now drag and drop days on the month view to move them around
    - activities can now be saved with a color and the shape. activities are the things that are added to the daily schedule or routine

## Dependencies
- [TailwindCSS](https://tailwindcss.com/)
- [Tippy.js](https://github.com/atomiks/tippyjs)
- [Toastify.js](https://github.com/aleab/toastify)
- [Color.js](https://colorjs.io/)
- [Badge Generator](https://michaelcurrin.github.io/badge-generator/#/generic) - Badges created with this webapp
