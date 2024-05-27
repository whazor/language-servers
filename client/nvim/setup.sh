#!/bin/sh

set -xeuo pipefail

ROOT="$(git rev-parse --show-toplevel)"

mkdir -p ~/.config/nvim/{lua}

# add codewhisperer.lua
ln -sf "$PWD/client/nvim/codewhisperer.lua" ~/.config/nvim/lua/codewhisperer.lua

# load codewhisperer.lua on startup
grep 'require "codewhisperer"' ~/.config/nvim/init.lua || echo 'require "codewhisperer"' >> ~/.config/nvim/init.lua
