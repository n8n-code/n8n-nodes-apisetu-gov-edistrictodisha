import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovEdistrictodishaApi implements ICredentialType {
        name = 'N8nDevApisetuGovEdistrictodishaApi';

        displayName = 'Apisetu Gov Edistrictodisha API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovEdistrictodisha/apisetu-gov-edistrictodisha.svg', dark: 'file:../nodes/ApisetuGovEdistrictodisha/apisetu-gov-edistrictodisha.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/edistrictodisha/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/edistrictodisha/v3',
                        description: 'The base URL of your Apisetu Gov Edistrictodisha API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
