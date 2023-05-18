# false
cd ./tslib-and-import-helpers/dist/helpers-false/
# true
cd ./tslib-and-import-helpers/dist/helpers-true/


echo "$(ls -l | awk '{ total += $5 } END { print total }') bytes"