import { standalone } from '@aws/language-server-runtimes/runtimes'
import { RuntimeProps } from '@aws/language-server-runtimes/runtimes/runtime'
import { SecurityScanServerServerImpl, CodeWhispererServerToken } from '@aws/lsp-codewhisperer'

const props: RuntimeProps = {
    servers: [CodeWhispererServerToken, SecurityScanServerServerImpl],
    name: 'AWS CodeWhisperer',
}
standalone(props)
