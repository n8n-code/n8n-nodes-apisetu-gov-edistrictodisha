import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovEdistrictodisha implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Edistrictodisha',
		name: 'N8nDevApisetuGovEdistrictodisha',
		icon: { light: 'file:./apisetu-gov-edistrictodisha.svg', dark: 'file:./apisetu-gov-edistrictodisha.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'EDistrict Odisha portal issues Income, Caste, Residence Certificates.',
		defaults: { name: 'Apisetu Gov Edistrictodisha' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovEdistrictodishaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
