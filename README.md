  # MERN amazon
  
 # Lessons
1. Introduction
2. Install tools
3. Create React App
4. Create Git Repository
  
     5. List products
1.create product array
2.add product image
3.render product
4.style product

     6. Add routing
1.npm install react-router-dom
2.create route for home screen
3.create route for product screen
         

      6. Create Node.JS Server
 1. run npm init root folder
 2. Update package.json: set type module
 3. Add.js to imports
 4. npm install express
 5. Create server.js
 6. add start command as node backend/server.js
 7. require express in server.js
 8. create route for / return backend is ready
 9. move products.js from frontend to backend
 10. create route for /api/products
 11. return products 
 12. run npm start
         
        7. Fetch products from backend
1.set proxy in package.json
2.npm install axios
3.use state hook
4.use effect hook
5.use reducer hook

        8. Manage State By Reducer Hook
1.Define Reducer
2.Update fetch data
3.get state from usReducer
     
        9. Add Bootstrap UI Framework
1.npm install-bootstrap bootstrap
2.Update App.js

        10. Create Product and rating component
1.Create Rating Component
2.Create Product Component
3.Use Ratting component in Product Component
     
        11. Create Product Details Screen
1.fetch product from backend
2.create 3 colum for image, info and action

        12. Create Loading and Massage Component
1.Create Loading Component
2.Use spinner component
3.Create Massage Component
4.Create utils.js to define getError function
         
        13. Implement Add to Cart 
1.Create React Context
2.Define reducer 
3.Create Store provider
4.implement add to cart button click handler
     
        14. Complete Add to Cart
1.check exit item in the cart
2.check count in stock in backend
        
        15. Create Cart Screen
1.Create 2 columns
2.Display Items list
3.Create action column
     
        16. Complete Cart Screen
1.click handler for remove inc/dec item
2.click handler for remove item
3.click handler for checkout
     
        17. Create Sign In Screen
1.Create Sign In Form
2.add email and password
3.add sign-in button
     
        18. Connect To MongoDB Database
1.Create atlas mongoDB database
2.install local mongoDB database
3.npm install mongoose
4.Connect to mongoDB database
     
        19. Seed Sample Data
1.Create Product model
2.Create User model
3.Create seed route
4.Use route in server.js
5.Seed sample product
     
        20. Seed Sample Users
1.Create User model
2.Create seed route
3.Create user routes
     
        21. Create Sign-in Backend API
1.Create sign api
2.npm install jsonwebtoken
3.define generateToken
     
            22. Complete Sign-in Screen
1.Handle submit action
2.Save token in store and local storage
3.Show user name in header
            
            23. Create Shipping Screen
1.Create form inputs
2.Handle save shipping address
3.Add checkout wizard bar
        
            24. Create Sign-Up Screen
1.Create form inputs
2.Handle submit action
3.Create backend api
            
            25. Implement Select Payment Method Screen
 1.Create input forms
 2.Handle submit 
            
            26. Create Place Order Screen
1.Show cart items, payment method and  address
2.handle place order action
3.Create order, create API
                   
            27. Implement Place Order Action
1.Handle place order action
2.Create order, create API
        
                28. Create Order Screen
1.create backend api for order/:id
2.fetch order api in frontend
3.show order information in 2 columns
                
                29. Pay Order By PayPal
1.Generate PayPal Client ID
2.Create API to return client ID
3.Install react-paypal-js
4.Use PayPalScriptProvider in index.js
5.Use PayPalScriptReducer in Order Screen
6.Implement loadPaPalScript function
7.Render PayPal button
8.Implement onApprove payment function 
9.Create pay order api in backend     
                
                30. Display Order History
1.Create order history screen
2.Create order history api
3.Use API in frontend
            
                31. Create Profile Screen
1.get user info from context
2.show user information
3.create user update api
4.update user information
                
                    32. Publish in Heroku
1.Create and config node project 
2.serve build folder in frontend folder
3.Create Heroku account
4.Connect it to github
5.Create mongodb atlas account
6.Set database connection in Heroku env variable
7.Commit end push
                    
                    33. Add Sidebar and Search box
1.add sidebar
2.add search box
                    
                    34. Create Search Screen
1.Show filters
2.Create api for searching products 
3.Display results.
                    
                    35. Create Admin menu
1.define protected route component
2.define admin route component
3.add menu admin in header
                
                    36. Create Dashboard Screen
1.create dashboard ui
2.implement backend api
3.connect ui to backend 
                    
                    37. Manage Products Screen
1.Create product list ui
2.implement backend api
3.fetch data
                    
                    38. Create Product
1.Create Product button
2.Implement Backend API
3.Handle on click
                    
                    39. Edit Product
1.Create Edit Product button
2.create edit product UI
3.Display product information in the input boxes
                    
                    40. Implement Update Product 
1.Create update product api
2.Handle on click
                    
                    41. Upload Product Image
1.Create cloudinary account
2.use the API key in env file
3.handle upload file
4.implement backend api upload
                    
                    42. Delete Product
1.Show delete button
2.implement backend api
3.handle on click
                    
                    43. List Order
1.Create order list Screen
2.Implement backend api
3.fetch and display orders
                    
                    44. Deliver Order
1.add Deliver button
2.handle click action
3.implement backend api for deliver
                    
                    45. List Users
1.Create user list Screen
2.implement backend api
3.fetch and display users
                
                    46. Edit User
1.Create edit button
2.Create edit product UI
3.Display product info in the input boxes
4.implement backend api
5.handle edit click
                    
                    47. Delete User
1.add delete button
2.handle click action
3.implement backend api for delete
                    
[//]: # (                        48. Choose Address On Google Map)

[//]: # (1.Create Google map credentials)

[//]: # (2.update .env file with Google api key                    )

[//]: # (3.create api to send Google api to frontend            )

[//]: # (4.create map screen             )

[//]: # (5.fetch google api                )

[//]: # (6.getUserLocation function)

[//]: # (7.install @react-google-maps/api)

[//]: # (8.use it in shipping screen                )

[//]: # (9.apply map to the checkout screen)
                        
                        49. Email order receipt by mailgun
1.create mailgun account
2.add and verify your domain to mailgun
3.install mailgun-js
4.set api key in env file
5.change pay order in orderRouter
6.send email order receipt



