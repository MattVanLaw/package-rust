echo '{' > outdated.json \
&& yarn outdated --json >> outdated.json \
&& echo '}' >> outdated.json
