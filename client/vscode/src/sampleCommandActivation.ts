import { ExtensionContext, commands, window, workspace } from 'vscode'
import { ExecuteCommandParams, ExecuteCommandRequest, LanguageClient } from 'vscode-languageclient/node'

export function registerLogCommand(languageClient: LanguageClient, extensionContext: ExtensionContext) {
    extensionContext.subscriptions.push(commands.registerCommand('helloWorld.log', logCommand(languageClient)))
}

export function registerCodeScanCommand(languageClient: LanguageClient, extensionContext: ExtensionContext) {
    extensionContext.subscriptions.push(commands.registerCommand('q.codescan', codeScanCommand(languageClient)))
}

export function logCommand(languageClient: LanguageClient) {
    return async () => {
        const request: ExecuteCommandParams = {
            command: '/helloWorld/log',
        }
        await languageClient.sendRequest(ExecuteCommandRequest.method, request)
        languageClient.info(`Client: The log command has been executed`)
    }
}

export function codeScanCommand(languageClient: LanguageClient) {
    return async () => {
        if (window.activeTextEditor?.document.uri) {
            const filepath = window.activeTextEditor?.document.uri.fsPath
            const projectPath = workspace.getWorkspaceFolder(window.activeTextEditor?.document.uri)?.uri.fsPath

            const request: ExecuteCommandParams = {
                command: 'aws/codewhisperer/runSecurityScan',
                arguments: [
                    {
                        ActiveFilePath: filepath,
                        ProjectPath: projectPath,
                    },
                ],
            }
            await languageClient.sendRequest(ExecuteCommandRequest.method, request)
            languageClient.info(`Client: CodeScan command is executed`)
        }

        languageClient.info(`Client: open a file to run CodeScan`)
    }
}
