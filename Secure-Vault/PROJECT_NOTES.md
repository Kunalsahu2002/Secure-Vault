# 🔐 Secure-Vault - Project Notes

## 🧠 Core Logic & Functions

### 1. State Management

**useEffect Function**

```javascript
 useEffect(()=>{
    let passwords = localStorage.getItem("passwords")
    if(passwords){
      setpasswordArray(JSON.parse(passwords))
    }
  },[])
  ```
-  When it runs: It runs one time right after the page/component first shows on screen.
-  What it does: It looks in your browser’s saved storage for something called "passwords".
-  Condition: If it finds something there, it converts that saved text back into a list and fills passwordArray with it.
-  Why: So your saved passwords appear automatically even after you refresh or reopen the page.
-  Note: If you change passwords in a different browser tab, this page won’t notice because it only checks once.
 

```javascript
// Main form state for input fields
const [form, setform] = useState({site: "",username: "",password: ""})

// Array to store all password entries
const [passwordArray, setpasswordArray] = useState([])

```

#### A. Password Management
```javascript
// Save new password
const savePassword = ()=>{
    if(form.site.length >3 && form.username.length >3 && form.password.length >3){
      // Updates state by appending a new entry {...form, id: uuidv4()}
      setpasswordArray([...passwordArray,{...form,id:uuidv4()}])
      // Writes the updated list to localStorage, calls uuidv4() again, generating a second, different id for storage
      localStorage.setItem("passwords",JSON.stringify([...passwordArray,{...form,id:uuidv4()}]))
      console.log(...passwordArray,form)
      setform({site:"", username:"", password:""})
      toast('Password saved!', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: false,
        pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    } else{
        toast('Error: Password not saved!',{position: "top-right",autoClose: 2000, theme: "dark"})
      }
   }

// Delete password
const  deletePassword = (id)=>{
    // console.log("deleting password with id", id)
    let c  = confirm("Do you really want to delete this password")
    if(c){
      // Removes the item with matching `id` from state using filter.
      setpasswordArray(passwordArray.filter((item)=>item.id!==id))
      // Persists the filtered array to localStorage
      localStorage.setItem("passwords",JSON.stringify(passwordArray.filter((item)=>item.id!==id)))
      toast('Password Deleted');
    }     
 }

// Edit password
const editPassword = (id)=>{
    // console.log("editing password with id", id)
    // Finds the entry by id and sets it into the form for editing.
    setform(passwordArray.filter(i=>i.id===id)[0])
    // Removes the original entry from the list (you’ll re-save after editing).
    setpasswordArray(passwordArray.filter(i=>i.id!==id))
  }
```

#### B. Utility Functions
```javascript
// Copy text to clipboard
const copyText = (text) => {
  toast('🦄 Copied to clipboard!')   
  navigator.clipboard.writeText(text)   // Copies text to the clipboard using the Clipboard API.
}

// Toggle password visibility
const showPassword = () => {
  if(ref.current.src.includes("icons/eyecross.png")){
    ref.current.src = "icons/eye.png"
    passwordRef.current.type = "password"  // Sets input type to "password" (hide).
  } else {
    ref.current.src = "icons/eyecross.png"
    passwordRef.current.type = "text"      //Sets input type to "text" (show).
  }
}

// Handle form input changes
// Updates the form by spreading existing fields and replacing the field whose name matches the input with 
    // the new value. This powers all three inputs.
const handleChange = (e) => {
  setform({...form, [e.target.name]: e.target.value})
}
```

## 🔑 Key Functions

### Password Management
- `savePassword()` - Save new password with validation
- `deletePassword(id)` - Delete password with confirmation
- `editPassword(id)` - Edit existing password
- `copyText(text)` - Copy to clipboard with toast

### State Variables
- `form` - Current form data (site, username, password)
- `passwordArray` - Array of all stored passwords
- `ref` - Reference to eye icon
- `passwordRef` - Reference to password input

## 💾 Data Flow
1. User inputs → `form` state
2. Save → `passwordArray` + `localStorage`
3. Load → `useEffect` reads from `localStorage`
4. CRUD operations sync both state and storage

## 🎯 Key Features
- ✅ Add/Edit/Delete passwords
- ✅ Copy any field to clipboard
- ✅ Password visibility toggle
- ✅ Toast notifications
- ✅ Responsive design
- ✅ Local storage persistence 

## 🎯 Key Learning Points from This Project:
**1. React-toastify - Beautiful Notifications**
- Used for user `feedback` (success, error messages)
- Configurable `positions`, `themes`, and `auto-close timing`

**2. UUID Library - Unique Identifiers**
- Generates `unique IDs` for each password entry
- Essential for proper `data management`

**3. LocalStorage - Client-Side Data Persistence**
- Stores passwords in browser storage
- Data `survives page refreshes`
- Real-time synchronization between state and storage
