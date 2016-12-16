declare module "jsforce" {
	export const Connection: {
		new (option: {
			proxyUrl: string
		}) : Connection
	}

	export interface Connection {
		login: (loginId: string, password: string, callback: (err: any, res: any) => void) => void;
		sobject: (objectName: string) => { describe: (callback: (err: any, res: SObject) => void) => void }
	}

	export interface ChildRelationships {
		cascadeDelete: boolean
		childSObject: string
		deprecatedAndHidden: boolean
		field: string
		junctionIdListNames: any[]
		junctionReferenceTo: any[]
		relationshipName: string
		restrictedDelete: boolean
	}

	export interface Field {
		aggregatable: boolean
		autoNumber: boolean
		byteLength: number
		calculated: boolean
		calculatedFormula: any
		cascadeDelete: boolean
		caseSensitive: boolean
		controllerName: any
		createable: boolean
		custom: boolean
		defaultValue: any
		defaultValueFormula: any
		defaultedOnCreate: boolean
		dependentPicklist: boolean
		deprecatedAndHidden: boolean
		digits: number
		displayLocationInDecimal: boolean
		encrypted: boolean
		externalId: boolean
		extraTypeInfo: any
		filterable: boolean
		filteredLookupInfo: any
		groupable: boolean
		highScaleNumber: boolean
		htmlFormatted: boolean
		idLookup: boolean
		inlineHelpText: any
		label: string
		length: number
		mask: any
		maskType: any
		name: string
		nameField: boolean
		namePointing: boolean
		nillable: boolean
		permissionable: boolean
		picklistValues: PicklistValue[]
		precision: number
		queryByDistance: boolean
		referenceTargetField: any
		referenceTo: string[]
		relationshipName: any
		relationshipOrder: any
		restrictedDelete: boolean
		restrictedPicklist: boolean
		scale: number
		soapType: string
		sortable: boolean
		type: string
		unique: boolean
		updateable: boolean
		writeRequiresMasterRead: boolean
	}

	export interface PicklistValue {
		active: boolean
		defaultValue: boolean
		label: string
		validFor: any
		value: string
	}

	export interface RecordTypeInfo {
		available: boolean
		defaultRecordTypeMapping: boolean
		master: boolean
		name: string
		recordTypeId: string
		urls: {[key: string]: string}
	}

	export interface SupportedScope {
		label: string
		name: string
	}

	export interface SObject {
		actionOverrides: any[]
		activateable: boolean
		childRelationships: ChildRelationships[]
		compactLayoutable: boolean
		createable: boolean
		custom: boolean
		customSetting: boolean
		deletable: boolean
		deprecatedAndHidden: boolean
		feedEnabled: boolean
		fields: Field[]
		keyPrefix: string
		label: string
		labelPlural: string
		layoutable: boolean
		listviewable: any
		lookupLayoutable: any
		mergeable: boolean
		mruEnabled: boolean
		name: string
		namedLayoutInfos: any[]
		networkScopeFieldName: any
		queryable: boolean
		recordTypeInfos: RecordTypeInfo[]
		replicateable: boolean
		retrieveable: boolean
		searchLayoutable: boolean
		searchable: boolean
		supportedScopes: SupportedScope[]
		triggerable: boolean
		undeletable: boolean
		updateable: boolean
		urls: {[key: string]: string}
	}
}