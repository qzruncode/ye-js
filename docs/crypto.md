## Crypto

### import 
```
import { Crypto } from 'ye-js';
```

### MD5
```
Crypto.MD5('叶家伟') // e5f0979d37937e39b48093cb3b3b1a4a
```

### Html

+ Encoding HTML string
    ```
    Crypto.Html.escapeHTML('<div>abc</div>') // &lt;div&gt;abc&lt;/div&gt;
    ```

+ Decode HTML string
    ```
    Crypto.Html.unescapeHTML('&lt;div&gt;abc&lt;/div&gt;') // <div>abc</div>
    ```

### Base64

+ Converts the ArrayBuffer into a base64 string
    ```
    Crypto.Base64.bufferToBase64(new Uint8Array([97, 98, 99])) // YWJj
    ```

+ Converts the base64 string into ArrayBuffer
    ```
    Crypto.Base64.base64ToBuffer('YWJj') // Uint16Array(3) [97, 98, 99]
    ```

+ base64ToFile
    ```
    Crypto.Base64.base64ToFile(base64Str, fileType);
    ```

+ fileTobase64
    ```
    Crypto.Base64.fileTobase64(file);
    ```