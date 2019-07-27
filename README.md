# Humber Media Pros, Assignment Outline

## Groups
- **Home:** Ash, Arath, Nina
- **Program:** Sukhjeet, Carlos, Shojol
- **Class List:** Rupali, Sunmi, Patrick
- **Student:** Claude, Hari Krishna, Sunny

## Link
<https://github.com/team-humber-web-2019/humber-media-pros>

**Note**: The header and footer design and colours are not final - just placeholder. You may ignore that files for now.

## Objective
Create a prototype page for your assigned group using the Bootstrap library, along with custom CSS (or SCSS/Sass) for anything beyond what's possible in (or to override) Bootstrap's library. 

The pages should follow the design guidelines (variables stored in `/src/styles/_variables.scss`) and staying true to the original inspiration design (now found in `/assets`). Feel free to use any assets in the `/assets` folder and remember that `.pdf` files can usually be edited in Illustrator and exported as an SVG (or other) if needed.

Remember, this is only a prototype! So it is required that you have static content only. The design itself should be polished and complete, ready to implement. If appropriate, you may split-up elements into their own components, stored in the `/components` folder.

## Grading
This portion of the project will be assigned to the project portion of your final grade. You will be assessed in-part based on your commits and scored on work contributed (so all members must contribute, and do so frequently), your use of CSS (or Sass), semantic HTML, management of files and folder structure, and overall competencies in: HTML, CSS, JS, React and Gatsby.

## Instructions
1. Start a group chat with your other team members, designate one person to start a Github "Organization" named _exactly_ as follows: `wddm-home` (if you are the home group)
2. Fork the repository above into the organization.
3. Add the other two members to the group as contributors with "write" access.
4. Meet with your group to discuss the objective, goals and how the interface will tackled. Decide on tasks for each member.
5. Each member should clone to their desktop and will create a branch named after their first task and start working.
6. Before running `gatsby develop`, be sure to run `npm install` from the project root folder to install the modules required for the application to your local computer (you must always do this once after a clone when a project that has `package.json` dependencies because `node_modules` does not travel along with the project via the repo)
7. The members will coordinate through Slack (or other) for 5 brief (15 min max) meetings to coordinate code, testing and delegation of tasks. Suggested times: Weds evening, Thurs evening, Friday afternoon, Friday evening, and Saturday early-afternoon, to discuss progress.
8. Merge code into `master` when branches are tested and confirmed complete by all members.
9. **Before 3pm Saturday (27th)**, all completed work must be merged into `master`, and also the appropriate pre-existing branch named after your group `prototype-home` (if `home` is your group's page).
10. Before the deadline, head back to Github in your team's forked repo, hit the "New Pull Request" button and select the appropriate `prototype-` branch from both repositories and create the pull request.
11. Designate someone a message on Slack to let everyone know your branch is ready to review.

More info on pull requests from a fork [can be found here](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork)

## Keep your fork up to date

If there are changes made to the original repository, you may want to keep up to date with them. From the command line, execute the following commands:

- Create a remote connection to the original repository and nickname it `upstream`:
```shell
git remote add upstream git://github.com/team-humber-web-2019/humber-media-pros.git
```

- Identify all the branches from that `upstream` repo:
```shell
git fetch upstream
```

- Specifically sync and merge into your current branch from the `upstream`'s `master` branch:
```shell
git pull upstream master
```

**Also note:** If you updated your forked `master` and now want other branches to match up with master, you can  `rebase` them individually if you `checkout` that branch, then run: `git rebase master`