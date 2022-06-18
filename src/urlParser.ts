const segmentIsVariable = (segment: string) => segment[0] === ':';

const extractSegments = (urlFormat: string, url: string) => {
  const urlSegmentsFormat = urlFormat.split('/');
  const urlSegments = url.split('/');

  const result = urlSegmentsFormat.reduce(
    (res: Record<string, string | number>, urlSegmentFormat, i) => {
      if (segmentIsVariable(urlSegmentFormat)) {
        res[urlSegmentFormat.slice(1)] = Number(urlSegments[i]) || urlSegments[i];
      }
      return res;
    },
    {},
  );

  return result;
};

const extractParams = (params: string) => {
  const splittedParams = params.split('&');

  const result = splittedParams.reduce((res: Record<string, string | number>, param) => {
    const [paramName, paramValue] = param.split('=');
    res[paramName] = Number(paramValue) || paramValue;
    return res;
  }, {});

  return result;
};

export const extractVariablesFromUrl = (urlFormat?: string, urlInstance?: string) => {
  if (!urlInstance) {
    return {};
  }

  const [url, params] = urlInstance.split('?');
  const extractedSegments = urlFormat && url ? extractSegments(urlFormat, url) : {};
  const extractedParams = params ? extractParams(params) : {};
  return { ...extractedSegments, ...extractedParams };
};
