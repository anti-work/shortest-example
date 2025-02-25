#!/bin/bash
mkdir -p .shortest
printf '\n\n=== Run started at %s ===\n' "$(date)" >> .shortest/trace.log
FORCE_COLOR=1 npx shortest $@ 2>&1 | while IFS= read -r line; do
  # Strip color codes for log file but keep them in terminal
  clean_line=$(echo "$line" | perl -pe 's/\e\[[0-9;]*[mGK]//g')
  echo "$clean_line" | tee -a .shortest/trace.log
done
