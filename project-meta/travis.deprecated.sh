if [ "$useTest" = 'y' ] ; then
	showTavisInstructions
fi

function showTavisInstructions() {
	echo
	logTitle 'Travis instructions:'
	echo '1. Goto: https://travis-ci.org/profile/taitulism'
	echo '2. sync account (top right)'
	echo '3. enable & click the repo name'
	echo '4. Click the badge, change to "Markdown", copy and place it in README.md (below the license).'
	echo '5. change travis to develop branch'
}


function installTravis () {
	logWarn '* Installing Travis CI (yml file and badge)...'

	copyFile '.travis.yml'

	# Travis badge - set project name
	badge=$(cat "$TPL/travis-badge.md" | sed "s/<NAME>/$name/g")

	# Travis badge - add to README
	cat "$NEW_REPO/README.md" | sed "s@<TRAVIS_BADGE>@$badge@" > tmp
	cat tmp > "$NEW_REPO/README.md"
	rm tmp

	# sed uses @ instead of / because the var contains slashes itself and causing an error
}

# remove Travis badge placeholder from README
cat "$NEW_REPO/README.md" | sed "s/<TRAVIS_BADGE>//" > tmp
cat tmp > "$NEW_REPO/README.md"
rm tmp

unset useTravis
