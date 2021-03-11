#!/bin/bash
set -e

# Ensure Project directory exists
mkdir -p /home/node/app

# Get current node user UID-GID
CURRENT_UID="$(id -u node)"
CURRENT_GID="$(id -g node)"

# Change node user UID and GID
[ -n "${PROJECT_UID}" ] && [ "${PROJECT_UID}" != "${CURRENT_UID}" ] && \
    usermod -u "${PROJECT_UID}" node

[ -n "${PROJECT_GID}" ] && [ "${PROJECT_GID}" != "${CURRENT_GID}" ] && \
    groupmod -g "${PROJECT_GID}" node && \
    find /home/node -group "${CURRENT_GID}" -exec chgrp -h node {} +

gosu node yarn install || exit $?
exec gosu node "$@"
