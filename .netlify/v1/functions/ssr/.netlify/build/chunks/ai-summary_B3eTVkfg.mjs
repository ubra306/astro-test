import OpenAI from 'openai';
import { A as AstroError, v as EnvInvalidVariables } from './astro/server_ZdVfgEHl.mjs';

const schema = {"API_URL":{"context":"server","access":"public","optional":true,"type":"string"},"PORT":{"context":"server","access":"public","default":4321,"type":"number"},"API_KEY":{"context":"server","access":"secret","type":"string"}};

function invalidVariablesToError(invalid) {
  const _errors = [];
  for (const { key, type, errors } of invalid) {
    if (errors[0] === "missing") {
      _errors.push(`${key} is missing`);
    } else if (errors[0] === "type") {
      _errors.push(`${key}'s type is invalid, expected: ${type}`);
    } else {
      _errors.push(`The following constraints for ${key} are not met: ${errors.join(", ")}`);
    }
  }
  return _errors;
}

function getEnvFieldType(options) {
  const optional = options.optional ? options.default !== void 0 ? false : true : false;
  let type;
  if (options.type === "enum") {
    type = options.values.map((v) => `'${v}'`).join(" | ");
  } else {
    type = options.type;
  }
  return `${type}${optional ? " | undefined" : ""}`;
}
const stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
  if (typeof input !== "string") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (max !== void 0 && !(input.length <= max)) {
    errors.push("max");
  }
  if (min !== void 0 && !(input.length >= min)) {
    errors.push("min");
  }
  if (length !== void 0 && !(input.length === length)) {
    errors.push("length");
  }
  if (url !== void 0 && !URL.canParse(input)) {
    errors.push("url");
  }
  if (includes !== void 0 && !input.includes(includes)) {
    errors.push("includes");
  }
  if (startsWith !== void 0 && !input.startsWith(startsWith)) {
    errors.push("startsWith");
  }
  if (endsWith !== void 0 && !input.endsWith(endsWith)) {
    errors.push("endsWith");
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: input
  };
};
const numberValidator = ({ gt, min, lt, max, int }) => (input) => {
  const num = parseFloat(input ?? "");
  if (isNaN(num)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (gt !== void 0 && !(num > gt)) {
    errors.push("gt");
  }
  if (min !== void 0 && !(num >= min)) {
    errors.push("min");
  }
  if (lt !== void 0 && !(num < lt)) {
    errors.push("lt");
  }
  if (max !== void 0 && !(num <= max)) {
    errors.push("max");
  }
  if (int !== void 0) {
    const isInt = Number.isInteger(num);
    if (!(int ? isInt : !isInt)) {
      errors.push("int");
    }
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: num
  };
};
const booleanValidator = (input) => {
  const bool = input === "true" ? true : input === "false" ? false : void 0;
  if (typeof bool !== "boolean") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: bool
  };
};
const enumValidator = ({ values }) => (input) => {
  if (!(typeof input === "string" ? values.includes(input) : false)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: input
  };
};
function selectValidator(options) {
  switch (options.type) {
    case "string":
      return stringValidator(options);
    case "number":
      return numberValidator(options);
    case "boolean":
      return booleanValidator;
    case "enum":
      return enumValidator(options);
  }
}
function validateEnvVariable(value, options) {
  const isOptional = options.optional || options.default !== void 0;
  if (isOptional && value === void 0) {
    return {
      ok: true,
      value: options.default
    };
  }
  if (!isOptional && value === void 0) {
    return {
      ok: false,
      errors: ["missing"]
    };
  }
  return selectValidator(options)(value);
}

let _getEnv = (key) => process.env[key];
function getEnv$1(...args) {
  return _getEnv(...args);
}
function createInvalidVariablesError(key, type, result) {
  return new AstroError({
    ...EnvInvalidVariables,
    message: EnvInvalidVariables.message(
      invalidVariablesToError([{ key, type, errors: result.errors }])
    )
  });
}

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};
const API_URL = "https://aif-it-talents.cognitiveservices.azure.com/";let API_KEY = _internalGetSecret("API_KEY");

const model = "gpt-4.1-mini";
const apiKey = API_KEY;
const apiVersion = "2024-12-01-preview";
const deployment = "gpt-4.1-mini";
const openai = new OpenAI({
  apiKey,
  baseURL: `${API_URL}openai/deployments/${deployment}/`,
  defaultHeaders: {
    "api-key": apiKey,
    "Content-Type": "application/json"
  },
  defaultQuery: {
    "api-version": apiVersion
  }
});
async function chatWithAzureOpenAI(messages, options) {
  const response = await openai.chat.completions.create({
    messages,
    max_tokens: options?.maxTokens ?? 800,
    temperature: options?.temperature ?? 1,
    top_p: options?.topP ?? 1,
    frequency_penalty: options?.frequencyPenalty ?? 0,
    presence_penalty: options?.presencePenalty ?? 0,
    model
  });
  return response.choices[0]?.message?.content;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  chatWithAzureOpenAI
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
