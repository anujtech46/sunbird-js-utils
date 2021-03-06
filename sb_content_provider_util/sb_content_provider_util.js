var httpUtil = require('sb-http-util');
var configUtil = require('sb-config-util');

getHttpOptions = function(url, data, method, formData, headers) {

    var defaultHeaders = {
        'Content-Type': 'application/json',
        'Authorization': configUtil.getConfig('Authorization_TOKEN')
    };

    var http_options = {
        url: url,
        headers: defaultHeaders,
        method: method,
        json: true
    };

    if (headers) {
        headers['Content-Type'] = headers['Content-Type'] ? headers['Content-Type'] : defaultHeaders['Content-Type'];
        headers['Authorization'] = defaultHeaders['Authorization'];
        http_options.headers = headers;
    }
    
    if (data) 
        http_options.body = data;

    if (formData)
        http_options.formData = formData;

    return http_options;
};

getHttpOptionsForLS = function(url, data, method, formData, headers) {
    
        var defaultHeaders = {
            'Content-Type': 'application/json',
            'Authorization': configUtil.getConfig('LEARNER_SERVICE_AUTHORIZATION_TOKEN')
        };
    
        var http_options = {
            url: url,
            headers: defaultHeaders,
            method: method,
            json: true
        };
    
        if (headers) {
            headers['Content-Type'] = headers['Content-Type'] ? headers['Content-Type'] : defaultHeaders['Content-Type'];
            headers['Authorization'] = defaultHeaders['Authorization'];
            http_options.headers = headers;
        }
        
        if (data) 
            http_options.body = data;
    
        if (formData)
            http_options.formData = formData;
    
        return http_options;
    };


createContent = function(data, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('CREATE_CONTENT_URI');
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

searchContent = function(data, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('SEARCH_CONTENT_URI');
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

compositeSearch = function(data, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('COMPOSITE_SEARCH_URI');
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};


updateContent = function(data, content_id, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('UPDATE_CONTENT_URI') + "/" + content_id;
    var options = getHttpOptions(url, data, "PATCH", false, headers);
    sendRequest(options, cb);
};

getContent = function(content_id, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_CONTENT_URI') + "/" + content_id;
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

getContentUsingQuery = function(content_id, query, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_CONTENT_URI') + "/" + content_id;
    var options = getHttpOptions(url, null, "GET", false, headers);
    options.qs = query;
    sendRequest(options, cb);
};

reviewContent = function(data, content_id, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('REVIEW_CONTENT_URI') + "/" + content_id;
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

publishContent = function(data, content_id, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('PUBLISH_CONTENT_URI') + "/" + content_id;
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

listContent = function(data, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('LIST_CONTENT_URI');
    var options = getHttpOptions(url, null, "POST", false, headers);
    sendRequest(options, cb);
};

retireContent = function(content_id, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('RETIRE_CONTENT_URI') + '/' + content_id;
    var options = getHttpOptions(url, null, "DELETE", false, headers);
    sendRequest(options, cb);
};

uploadContent = function(formData, content_id, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('UPLOAD_CONTENT_URI') + '/' + content_id;
    var options = getHttpOptions(url, null, "POST", formData, headers);
    sendRequest(options, cb);
};

contentHierarchy = function(content_id, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('HIERARCHY_CONTENT_URI') + '/' + content_id;
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

contentHierarchyUsingQuery = function(content_id, query, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('HIERARCHY_CONTENT_URI') + '/' + content_id;
    var options = getHttpOptions(url, null, "GET", false, headers);
    options.qs = query;
    sendRequest(options, cb);
};

uploadMedia = function(formData, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('UPLOAD_MEDIA_URI');
    var options = getHttpOptions(url, null, "POST", formData, headers);
    sendRequest(options, cb);
};

getDomains = function(headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_DOMAIN_URI');
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

getDomainById = function(domainId, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_DOMAIN_URI') + '/' + domainId;
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

getObjects = function(domainId, objectType, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_DOMAIN_URI') + '/' + domainId + '/' + objectType;
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

getObjectById = function(domainId, objectType, objectId, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_DOMAIN_URI') + '/' + domainId + '/' + objectType + '/' + objectId;
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

getConceptById = function(conceptId, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_CONCEPT_URI') + '/' + conceptId;
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

searchObjectsType = function(data, domainId, objectType, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_DOMAIN_URI') + '/' + domainId + '/' + objectType + '/' + 'search';
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

createObjectType = function(data, domainId, objectType, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_DOMAIN_URI') + '/' + domainId + '/' + objectType + '/';
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

updateObjectType = function(data, domainId, objectType, objectId, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_DOMAIN_URI') + '/' + domainId + '/' + objectType + '/' + objectId;
    var options = getHttpOptions(url, data, "PATCH", false, headers);
    sendRequest(options, cb);
};

retireObjectType = function(data, domainId, objectType, objectId, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_DOMAIN_URI') + '/' + domainId + '/' + objectType + '/' + objectId + '/retire';
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

rejectContent = function(data, content_id, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('REJECT_CONTENT_URI') + '/' + content_id;
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

listTerms = function(headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('LIST_TERMS_URI');
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

listResourceBundles = function(headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('LIST_RESOURCE_BUNDLES_URI');
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

listOrdinals = function(headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('LIST_ORDINALS_URI');
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

flagContent = function(data, contentId, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('FLAG_CONTENT_URI') + '/' + contentId;
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

acceptFlagContent = function(data, contentId, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('ACCEPT_FLAG_CONTENT_URI') + '/' + contentId;
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

rejectFlagContent = function(data, contentId, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('REJECT_FLAG_CONTENT_URI') + '/' + contentId;
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

uploadContentUrl = function(data, content_id, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('CONTENT_UPLOAD_URL_URI') + '/' + content_id;
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

uploadContentWithFileUrl = function(content_id, query, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('UPLOAD_CONTENT_URI') + '/' + content_id;
    var options = getHttpOptions(url, null, "POST", {}, headers);
    options.qs = query;
    sendRequest(options, cb);
};

sendEmail = function(data, headers, cb) {
    var url = configUtil.getConfig('LEARNER_SERVICE_BASE_URL') + configUtil.getConfig('LS_SEND_EMAIL');
    var options = getHttpOptionsForLS(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

ekStepHealthCheck = function(cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('HEALTH_CHECK');
    var options = getHttpOptions(url, null, "GET", false, false);
    sendRequest(options, cb);
}

learnerServiceHealthCheck = function(cb) {
    var url = configUtil.getConfig('LEARNER_SERVICE_BASE_URL') + configUtil.getConfig('LS_HEALTH_CHECK');
    var options = getHttpOptionsForLS(url, null, "GET", false, false);
    sendRequest(options, cb);
}

unlistedPublishContent = function(data, content_id, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('UNLISTED_PUBLISH_CONTENT_URI') + "/" + content_id;
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

generateDialCode = function(data, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GENERATE_DIALCODE_URI');
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

getDialCode = function(dialCode_id, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_DIALCODE_URI') + '/' + dialCode_id;
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

updateDialCode = function(data, dialCode_id, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('UPDATE_DIALCODE_URI') + '/' + dialCode_id;
    var options = getHttpOptions(url, data, "PATCH", false, headers);
    sendRequest(options, cb);
};

dialCodeList = function(data, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('LIST_DIALCODE_URI');
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

contentLinkDialCode = function(data, headers, cb) {

    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('CONTENT_LINK_DIALCODE_URI');
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

searchDialCode = function(data, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('SEARCH_DIALCODE_URI');
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

publishDialCode = function(data, dialCode_id, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('PUBLISH_DIALCODE_URI') + '/' + dialCode_id;
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

createPublisher = function(data, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('CREATE_PUBLISHER_URI');
    var options = getHttpOptions(url, data, "POST", false, headers);
    sendRequest(options, cb);
};

getPublisher = function(publisher_id, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('GET_PUBLISHER_URI') + '/' + publisher_id;
    var options = getHttpOptions(url, null, "GET", false, headers);
    sendRequest(options, cb);
};

updatePublisher = function(data, publisher_id, headers, cb) {
    var url = configUtil.getConfig('BASE_URL') + configUtil.getConfig('UPDATE_PUBLISHER_URI') + '/' + publisher_id;
    var options = getHttpOptions(url, data, "PATCH", false, headers);
    sendRequest(options, cb);
};

function sendRequest(http_options, cb) {
    httpUtil.sendRequest(http_options, function(err, resp, body) {
        if (resp && resp.statusCode && body) {
            body.statusCode = resp.statusCode ? resp.statusCode : 500;
            cb(null, body);
        } else {
            cb(true, null);
        }
    });
}

module.exports = {
    createContent: createContent,
    searchContent: searchContent,
    compositeSearch: compositeSearch,
    updateContent: updateContent,
    getContent: getContent,
    reviewContent: reviewContent,
    uploadContent: uploadContent,
    publishContent: publishContent,
    listContent: listContent,
    retireContent: retireContent,
    contentHierarchy: contentHierarchy,
    getContentUsingQuery: getContentUsingQuery,
    uploadMedia: uploadMedia,
    contentHierarchyUsingQuery: contentHierarchyUsingQuery,
    getDomains: getDomains,
    getDomainById: getDomainById,
    getObjects: getObjects,
    getObjectById: getObjectById,
    getConceptById: getConceptById,
    searchObjectsType: searchObjectsType,
    createObjectType: createObjectType,
    updateObjectType: updateObjectType,
    retireObjectType: retireObjectType,
    rejectContent: rejectContent,
    listTerms: listTerms,
    listResourceBundles: listResourceBundles,
    listOrdinals: listOrdinals,
    flagContent: flagContent,
    acceptFlagContent: acceptFlagContent,
    rejectFlagContent: rejectFlagContent,
    uploadContentUrl: uploadContentUrl,
    uploadContentWithFileUrl: uploadContentWithFileUrl,
    sendEmail: sendEmail,
    ekStepHealthCheck: ekStepHealthCheck,
    learnerServiceHealthCheck: learnerServiceHealthCheck,
    unlistedPublishContent: unlistedPublishContent,
    generateDialCode: generateDialCode,
    getDialCode: getDialCode,
    updateDialCode: updateDialCode,
    dialCodeList: dialCodeList,
    contentLinkDialCode: contentLinkDialCode,
    searchDialCode: searchDialCode,
    publishDialCode: publishDialCode,
    createPublisher: createPublisher,
    getPublisher: getPublisher,
    updatePublisher: updatePublisher
};