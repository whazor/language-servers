-- TODO: add licence information

-- LSP
local lsp = require 'lspconfig'
local configs = require 'lspconfig.configs'
local util = require 'lspconfig.util'

-- Check if the config is already defined (useful when reloading this file)
if not configs.codewhisperer then
    configs.codewhisperer = {
        default_config = {
            cmd = { "./app/app/aws-lsp-codewhisperer-binary/bin/lsp-codewhisperer-binary-macos", "--stdio" },
            filetypes = { "python", "typescript", "javascript", "json" },
            root_dir = util.find_git_ancestor,
        }
    }
end

lsp.codewhisperer.setup {}