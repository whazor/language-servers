import { standalone } from '@aws/language-server-runtimes/runtimes'
import { RuntimeProps } from '@aws/language-server-runtimes/runtimes/runtime'
import {
    // CodeWhispererSecurityScanServerTokenProxy,
    CodeWhispererServerIAM,
} from '@aws/lsp-codewhisperer'

const MAJOR = 0
const MINOR = 1
const PATCH = 0
const VERSION = `${MAJOR}.${MINOR}.${PATCH}`

const props: RuntimeProps = {
    version: VERSION,
    // servers: [CodeWhispererServiceIAM, CodeWhispererSecurityScanServerTokenProxy, NetTransformServer],
    servers: [CodeWhispererServerIAM],
    name: 'AWS CodeWhisperer',
}
standalone(props)
