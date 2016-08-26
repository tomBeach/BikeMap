
// == use npm as server
    // Thomass-MBP-2:hackforgood-waba-map thomasbeach$ npm start
    //
    // > waba-bikemap@1.0.0 start /Users/thomasbeach/Desktop/_WEB_DEV/_WEB_PROJECTS2/hackforgood-waba-map
    // > serve

// == make new clone for hackforgood-waba-map
Thomass-MBP-2:_WEB_PROJECTS2 thomasbeach$ git clone https://github.com/dcfemtech/hackforgood-waba-map.git
Thomass-MBP-2:_WEB_PROJECTS2 thomasbeach$ cd hackforgood-waba-map/
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ ls
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/WABA_Demo
  remotes/origin/WIPmocoBikePaths
  remotes/origin/alongthepike-mocolive
  remotes/origin/alongthepike-pgdatasource
  remotes/origin/better-buffering
  remotes/origin/gh-pages
  remotes/origin/issue2_location
  remotes/origin/master
  remotes/origin/moco
  remotes/origin/tombeach-refactor
  remotes/origin/turf-buffer-admin-function
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git checkout -b merge-toms-work
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git branch -a
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git status
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git commit -m "added branch merge-toms-work and new UI files"
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git push
fatal: The current branch merge-toms-work has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin merge-toms-work

Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git push --set-upstream origin merge-toms-work
 * [new branch]      merge-toms-work -> merge-toms-work
Branch merge-toms-work set up to track remote branch merge-toms-work from origin.
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git commit -m "update after line notes changes"
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git branch -a
  master
* merge-toms-work
  remotes/origin/HEAD -> origin/master
  remotes/origin/WABA_Demo
  remotes/origin/WIPmocoBikePaths
  remotes/origin/alongthepike-mocolive
  remotes/origin/alongthepike-pgdatasource
  remotes/origin/better-buffering
  remotes/origin/gh-pages
  remotes/origin/issue2_location
  remotes/origin/master
  remotes/origin/merge-toms-work
  remotes/origin/moco
  remotes/origin/tombeach-refactor
  remotes/origin/turf-buffer-admin-function
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git pull
   77925f5..08db92b  master     -> origin/master
Your configuration specifies to merge with the ref 'merge-toms-work'
from the remote, but no such ref was fetched.
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git status
On branch merge-toms-work
Your branch is up-to-date with 'origin/merge-toms-work'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")

// == using git diff
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git diff index.html
diff --git a/index.html b/index.html
index d7a10fa..bc349a2 100644
--- a/index.html
+++ b/index.html
@@ -5,7 +5,7 @@
     <meta charset=utf-8 />
     <meta name="description" content="">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
-    <title>DC Bike Infrastructure</title>
+    <title>WABA Bike Map Project</title>

     <!-- ======= mapbox ======= -->
     <link rel="stylesheet" href="https://www.mapbox.com/base/latest/base.css" />

Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git checkout index.html
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git status
On branch merge-toms-work
Your branch is up-to-date with 'origin/merge-toms-work'.
nothing to commit, working directory clean


Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git remote -v
origin	https://github.com/dcfemtech/hackforgood-waba-map.git (fetch)
origin	https://github.com/dcfemtech/hackforgood-waba-map.git (push)
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git checkout master
Switched to branch 'master'
Your branch is behind 'origin/master' by 8 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git pull origin master
From https://github.com/dcfemtech/hackforgood-waba-map
 * branch            master     -> FETCH_HEAD
Updating 77925f5..08db92b
Fast-forward
 README.md  |   2 +-
 index.html | 108 ++++++++++++---
 site.js    | 752 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++---------------
 styles.css | 183 +++++++++++++++++++++++-
 4 files changed, 904 insertions(+), 141 deletions(-)

Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git branch -a
* master
  merge-toms-work
  remotes/origin/HEAD -> origin/master
  remotes/origin/WABA_Demo
  remotes/origin/WIPmocoBikePaths
  remotes/origin/alongthepike-mocolive
  remotes/origin/alongthepike-pgdatasource
  remotes/origin/better-buffering
  remotes/origin/gh-pages
  remotes/origin/issue2_location
  remotes/origin/master
  remotes/origin/merge-toms-work
  remotes/origin/moco
  remotes/origin/tombeach-refactor
  remotes/origin/turf-buffer-admin-function

Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git branch -d merge-toms-work
Deleted branch merge-toms-work (was a638b86).
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ atom .

// == setup npm server and eslint(?)
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ npm install
serve@1.4.0 node_modules/serve
├── commander@0.6.1
├── connect@2.3.9 (fresh@0.1.0, bytes@0.1.0, crc@0.2.0, cookie@0.0.4, qs@0.4.2, send@0.0.3, debug@2.2.0, formidable@1.0.11)
├── jade@1.11.0 (commander@2.6.0, character-parser@1.2.1, void-elements@2.0.1, jstransformer@0.0.2, mkdirp@0.5.1, constantinople@3.0.2, with@4.0.3, clean-css@3.4.19, transformers@2.1.0, uglify-js@2.7.1)
├── stylus@0.54.5 (css-parse@1.7.0, debug@2.2.0, mkdirp@0.5.1, source-map@0.1.43, glob@7.0.5, sax@0.5.8)
└── less-middleware@2.2.0 (node.extend@1.1.5, mkdirp@0.5.1, less@2.7.1)

eslint@3.3.1 node_modules/eslint
├── imurmurhash@0.1.4
├── path-is-inside@1.0.1
├── natural-compare@1.4.0
├── estraverse@4.2.0
├── strip-bom@3.0.0
├── pluralize@1.2.1
├── ignore@3.1.5
├── strip-json-comments@1.0.4
├── globals@9.9.0
├── esutils@2.0.2
├── progress@1.1.8
├── text-table@0.2.0
├── is-resolvable@1.0.0 (tryit@1.0.2)
├── user-home@2.0.0 (os-homedir@1.0.1)
├── debug@2.2.0 (ms@0.7.1)
├── levn@0.3.0 (type-check@0.3.2, prelude-ls@1.1.2)
├── doctrine@1.2.3 (isarray@1.0.0)
├── optionator@0.8.1 (fast-levenshtein@1.1.4, type-check@0.3.2, wordwrap@1.0.0, deep-is@0.1.3, prelude-ls@1.1.2)
├── json-stable-stringify@1.0.1 (jsonify@0.0.0)
├── chalk@1.1.3 (escape-string-regexp@1.0.5, ansi-styles@2.2.1, supports-color@2.0.0, strip-ansi@3.0.1, has-ansi@2.0.0)
├── shelljs@0.6.1
├── require-uncached@1.0.2 (resolve-from@1.0.1, caller-path@0.1.0)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── glob@7.0.5 (path-is-absolute@1.0.0, fs.realpath@1.0.0, inherits@2.0.1, inflight@1.0.5, once@1.3.3, minimatch@3.0.3)
├── concat-stream@1.5.1 (inherits@2.0.1, typedarray@0.0.6, readable-stream@2.0.6)
├── is-my-json-valid@2.13.1 (jsonpointer@2.0.0, generate-function@2.0.0, xtend@4.0.1, generate-object-property@1.2.0)
├── espree@3.1.7 (acorn-jsx@3.0.1, acorn@3.3.0)
├── inquirer@0.12.0 (ansi-regex@2.0.0, strip-ansi@3.0.1, ansi-escapes@1.4.0, through@2.3.8, rx-lite@3.1.2, cli-width@2.1.0, figures@1.7.0, string-width@1.0.2, run-async@0.1.0, readline2@1.0.1, cli-cursor@1.0.2)
├── file-entry-cache@1.3.1 (object-assign@4.1.0, flat-cache@1.2.1)
├── js-yaml@3.6.1 (esprima@2.7.2, argparse@1.0.7)
├── table@3.7.8 (slice-ansi@0.0.4, tv4@1.2.7, xregexp@3.1.1, strip-ansi@3.0.1, string-width@1.0.2, bluebird@3.4.1)
├── escope@3.6.0 (esrecurse@4.1.0, es6-weak-map@2.0.1, es6-map@0.1.4)
└── lodash@4.15.0

Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git checkout -b aug16postmerge
M	index.html
M	site.js
Switched to a new branch 'aug16postmerge'
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git status
On branch aug16postmerge
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   index.html
	modified:   site.js

no changes added to commit (use "git add" and/or "git commit -a")
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git add .
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git status
On branch aug16postmerge
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   index.html
	modified:   site.js

Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git commit -m "added PG County lanes file"
[aug16postmerge 1907749] added PG County lanes file
 2 files changed, 5 insertions(+), 2 deletions(-)
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git status
On branch aug16postmerge
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   index.html
	modified:   site.js

no changes added to commit (use "git add" and/or "git commit -a")

// == more git diff (remove period example)
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git diff .
diff --git a/index.html b/index.html
index f0be4b2..10472f3 100644
--- a/index.html
+++ b/index.html
@@ -31,7 +31,7 @@
         <div id="dragBar">
             <h3 class="menu-label">menu</h3>
         </div>
-        <div id="hoverText">.</div>
+        <div id="hoverText"></div>
         <table id="filters">
             <tr class="table-header">
                 <th class="td-r"><span class="filter-label">regions</span></th>
diff --git a/site.js b/site.js
index 1241d72..fc0bfb7 100644
--- a/site.js
+++ b/site.js
@@ -24,8 +24,8 @@ var defaultDisplay = {
 var defaultMap = {
     mapEl: document.getElementById("map"),
     mapStyle: "mapbox.light",
-    centerLat: 38.99,
-    centerLng: -77.20,
+    centerLat: 38.8990,
+    centerLng: -77.0354,
     zoom: 11,
     zoomControl: false,
     dataLayers: [],
@@ -229,7 +229,7 @@ app = {
                         $(hoverEl).removeClass("entered");
                     }
                 }
-                hoverText = ".";
+                hoverText = "";
             }
             $("#hoverText").text(hoverText);
         }

Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git status
On branch aug16postmerge
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   index.html
	modified:   site.js
	modified:   styles.css

no changes added to commit (use "git add" and/or "git commit -a")
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git add .
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git status
On branch aug16postmerge
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   index.html
	modified:   site.js
	modified:   styles.css

Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git comit -m "fixed red period, index title, map center lat/lon"
git: 'comit' is not a git command. See 'git --help'.

Did you mean this?
	commit
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git commit  -m "fixed red period, index title, map center lat/lon"
[aug16postmerge af8b1e9] fixed red period, index title, map center lat/lon
 3 files changed, 5 insertions(+), 5 deletions(-)
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git branch -a
* aug16postmerge
  master
  remotes/origin/HEAD -> origin/master
  remotes/origin/WABA_Demo
  remotes/origin/WIPmocoBikePaths
  remotes/origin/alongthepike-mocolive
  remotes/origin/alongthepike-pgdatasource
  remotes/origin/better-buffering
  remotes/origin/gh-pages
  remotes/origin/issue2_location
  remotes/origin/master
  remotes/origin/merge-toms-work
  remotes/origin/moco
  remotes/origin/tombeach-refactor
  remotes/origin/turf-buffer-admin-function
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git push
fatal: The current branch aug16postmerge has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin aug16postmerge

Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git remote -v
origin	https://github.com/dcfemtech/hackforgood-waba-map.git (fetch)
origin	https://github.com/dcfemtech/hackforgood-waba-map.git (push)
Thomass-MBP-2:hackforgood-waba-map thomasbeach$ git push origin aug16postmerge
Counting objects: 9, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (9/9), done.
Writing objects: 100% (9/9), 933 bytes | 0 bytes/s, done.
Total 9 (delta 7), reused 0 (delta 0)
remote: Resolving deltas: 100% (7/7), completed with 4 local objects.
To https://github.com/dcfemtech/hackforgood-waba-map.git
 * [new branch]      aug16postmerge -> aug16postmerge
Thomass-MBP-2:hackforgood-waba-map thomasbeach$
