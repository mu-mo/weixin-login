define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/health",
    "title": "CheckHealthy",
    "version": "1.0.0",
    "name": "CheckHealthy",
    "group": "Index",
    "filename": "../src/controller/index.go",
    "groupTitle": "Index",
    "description": "<p>CheckHealthy</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>正确返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"data\": \"hello world\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "err_msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 GateWay\n{\n  \"status\": 500,\n  \"err_msg\": \"server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/user/info",
    "title": "GetUserInfo",
    "version": "1.0.0",
    "name": "GetUserInfo",
    "group": "User",
    "filename": "../src/controller/user.go",
    "groupTitle": "User",
    "description": "<p>获取当前用户信息</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>正确返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"data\": {\n      \"nickname\": String,\n      \"sex\": \"1\"\n      \"province\": String,\n      \"city\": String,\n      \"country\": \"1\"\n      \"headimgurl\": String,\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "err_msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": 401,\n  \"err_msg\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/weixin/redirect_uri",
    "title": "GetRedirectURI",
    "version": "1.0.0",
    "name": "GetRedirectURI",
    "group": "Weixin",
    "filename": "../src/controller/weixin.go",
    "groupTitle": "Weixin",
    "description": "<p>get the weixin redirect_uri</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "index_url",
            "description": "<p>首页URL，后台跳转回首页的URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cb_api",
            "description": "<p>回调API接口：即为之后后台拿到用户信息之后后台会调用此接口将API发送过去，限制<another host>和<host>的子域名, method:POST</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"index_url\": \"https://<weixin host>/gradmovie/\",\n  \"cb_api\": \"https://test.<host>/api/v1/userInfo\"\n}",
          "type": "query"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>正确返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"data\": {\n      \"redirect_uri\": \"https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "err_msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n  \"status\": 400,\n  \"err_msg\": \"lack the param:index_url\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1/weixin/code",
    "title": "SetUserInfoByCode",
    "version": "1.0.0",
    "name": "SetUserInfoByCode",
    "group": "Weixin",
    "filename": "../src/controller/weixin.go",
    "groupTitle": "Weixin",
    "description": "<p>通过微信 code 获取用户信息并设置cookie之后进行302跳转</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>微信code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>index url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"code\": \"code\",\n  \"state\": \"index url\"\n}",
          "type": "query"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 302 StatusFound",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "err_msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"status\": 401,\n  \"err_msg\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
