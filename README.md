## Error Scope


### Install

Install using `npm install error-scope`

### Usage 

In a React app, wrap you main component with ErrorScope:  
`import { ErrorScope } from 'error-scope'`  

```javascript
<ErrorScope>
    <App/>
</ErrorScope>
```


#### Error props

| Name        | Description | 
| ----------- | ----------- |
| children       | All the components in your project     |
