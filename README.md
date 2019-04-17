# iwriter
在线文本编辑器

## API 设计原则
### URL格式：http[s]://IP:PORT/api/ver/resources

```
  http://ip:port/api/v1/users 获取所有用户的信息
  http://ip:port/api/v1/usres/:userid 获取给定用户的信息
```

### 状态码
服务器向用户返回的状态码和提示信息。

```
200 OK [GET] 成功
201 CREATED [POST/PUT/PATCH] 新建或修改成功
202 Accepted [*] 请求已被接受并等待服务中（异步处理）
204 No CONTENT [DELETE] 成功删除数据
400 INVALID REQUEST [POST/PUT/PATCH] 请求有误，操作被拒绝
401 Unauthorized [*] 没有授权
403 Forbidden [*] 有授权，但不允许访问资源（或对资源的访问是禁止的）
404 NOT FOUND [*] 资源不存在
406 Not Acceptable [GET] 不存在请求的文档格式（比如请求的JSON，但只有XML）
410 Gone [GET] 资源被永久删除，且不会再得到的
422 Unprocesable entity [POST/PUT/PATCH] 数据验证错误
500 INTERNAL SERVER ERROR [*] 服务器异常，用户无法判断发出的请求是否成功
```

### HTTP动词
1. GET（SELECT）：从服务器获取资源（一项或多项）
2. POST（CREATE）：新建资源（客户端提供改变后的完整资源）
3. PUT（UPDATE）：更新资源（客户端提供改变后的完整资源）
4. PATCH（UPDATE）：更新资源（客户端提供改变的属性集）
5. DELETE（DELETE）：删除资源

6. HEAD：获取资源元数据
7. OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的

```
GET /users : 列出所有用户
POST /users ： 新建用户
PUT /users/:userid ： 更新用户信息
PATH /users/:userid ：更新指定用户的信息
DELETE /users/:userid ：删除指定的用户
```

### 过滤信息
记录数量很多时，可以按过滤条件返回结果。过滤方式采用查询参数的方式给定。参数设计允许存在冗余。

```
GET /users?id=1  返回给定id的用户信息
GET /users/:id   返回给定id的用户信息
GET /projets?page=2&per_page=20   指定返回第几页（每页多少个）的数据集
GET /projects/:projectid/files?name=   返回给定项目、符合名称表示的文件
GET /projects/:porjectid/files?sortby=name&order=asc   按给定的项和排序方式返回项目的文件
```

## 异常处理
如果状态码是4xx，应该向客户端返回的出错信息。出错信息是一个JSON对象：``` {“error“:"这里是出错信息"}```

### 返回结果
数组，单个资源对象，新生成的资源对象，完整的资源对象，空文档

### Hypermedia API
返回结果中提供链接，连向其他API方法，使得用户不查文档，也知道下一步应该做什么。

```
{"link": {
  "rel":   "collection https://www.example.com/zoos",
  "href":  "https://api.example.com/zoos",
  "title": "List of zoos",
  "type":  "application/vnd.yourformat+json"
}}
```

上面代码表示，文档中有一个link属性，用户读取这个属性就知道下一步该调用什么API了。rel表示这个API与当前网址的关系（collection关系，并给出该collection的网址），href表示API的路径，title表示API的标题，type表示返回类型。

## APIs
### 用户管理

### 项目管理

### 文件管理
