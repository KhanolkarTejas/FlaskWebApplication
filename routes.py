def auth_routes(app, render_template, request, mysql, redirect, url_for):
    @app.route('/register', methods=['POST', 'GET'])
    def register():
        if request.method == 'GET':
            return render_template('register.html')

        if request.method == 'POST':
            try:
                user_name = request.form['user_name']
                user_password = generate_password_hash(request.form['user_password'])  # Hash the password
                user_contact = request.form['user_contact']
                user_email = request.form['user_email']
                user_pan_no = request.form['user_pancard_no']
                user_aadhar_no = request.form['user_aadhar_no'].replace(" ", "")
                permanent_addr = request.form['permanent_address']
                permanent_city = request.form['permanent_city']
                permanent_taluka = request.form['permanent_taluka']
                permanent_district = request.form['permanent_district']
                state = request.form['state']
                age = request.form['age']
                user_photo = request.form['user_photo']
                driving_license_photo = request.form['driving_license_photo']

                print("Form data received successfully:")
                print(request.form)
        
            except Exception as e:
                print('Error:', e)

    return app  

        

    #....Authentication and Authorization....

    # @app.route('/login',methods=['POST','GET'])
    # def login():
    #     if request.method=='GET':
    #         return render_template('login.html')
    #     else:
    #         name = request.form['user_name']
    #         password = request.form['user_password']

    #         cursor = mysql.connection.cursor()
    #         result=cursor.execute(f"""SELECT user_name,user_password
    #                                          FROM users
    #                                          WHERE user_name ='{name}';""")
            
    #         user_name,user_password=cursor.fetchall()[0]
    #         mysql.connection.commit()
    #         cursor.close()
    #         if user_name==name and user_password==password:
    #             return render_template('home.html')
    #         else:
    #             return redirect('/register')

    
    # @app.route('/register', methods = ['POST', 'GET'])
    # def register():
    #     if request.method == 'GET':
    #         return render_template('register.html')
        
    #     if request.method == 'POST':
    #         '''
    #         user_name = request.form['name']
    #         age = request.form['age']
    #         user_contact=request.form['contact']
    #         cursor = mysql.connection.cursor()
    #         cursor.execute(f""" INSERT INTO users VALUES ('{user_name}',{age},{user_contact});""")
    #         mysql.connection.commit()
    #         cursor.close()
    #         '''
    #         user_name = request.form['user_name']
    #         user_password = request.form['user_password']
    #         user_contact = request.form['user_contact']
    #         user_email = request.form['user_email']
    #         user_pan_no  = request.form['user_pancard_no']
    #         user_aadhar_no = request.form['user_aadhar_no'].replace(" ", "")
    #         permanent_addr = request.form['permanent_address']
        
    #         permanent_city = request.form['permanent_city']
    #         permanent_taluka = request.form['permanent_taluka']
    #         permanent_district = request.form['permanent_district']
    #         state = request.form['state']
    #         age = request.form['age']
    #         user_photo =request.form['user_photo']
    #         driving_license_photo =request.form['driving_license_photo']
           
    #         print("this is routes file")
    #         print(request.form)
            # try:
                    
            #     cursor = mysql.connection.cursor()

            #     '''
            #     cursor.execute(f"""
            #         INSERT INTO users (
            #         user_name, 
            #         user_password, 
            #         user_contact,
            #         role_id,
            #         user_email, 
            #         user_pan_no,
            #         user_aadhar_no, 
            #         permanent_addr, 
            #         permanent_city, 
            #         permanent_taluka,
            #         permanent_district, 
            #         state, 
            #         age,
            #         driving_license_photo,
            #         user_photo)VALUES (
            #             '{user_name}', 
            #             '{user_password}', 
            #             '{user_contact}',{1} ,
            #             '{user_email}', 
            #             '{user_pancard_no}',
            #              {user_aadhar_no}, 
            #             '{permanent_address}', 
            #             '{permanent_city}', 
            #             '{permanent_taluka}', 
            #             '{permanent_district}', 
            #             '{state}', 
            #             '{age}',
            #             {driving_license_photo},
            #             {user_photo})
            #     """)
            #     '''
              
            #     print(user_aadhar_no.replace(" ",""))
            #     # Define the INSERT query
            #     insert_query =f"""
            #     INSERT INTO users 
            #     ( user_name, user_password, user_contact, user_email, user_pan_no, user_aadhar_no, permanent_addr, permanent_city, permanent_taluka, state, permanent_district, age, driving_license_photo, user_photo) 
            #     VALUES 
            #     ('{user_name}','{user_password}', {user_contact}, '{user_email}','{user_pan_no}',{user_aadhar_no.replace(" ","")}, '{permanent_addr}', '{permanent_city}', '{permanent_taluka}', '{state}', '{permanent_district}', {age}, '{driving_license_photo}', '{user_photo}')
            #     """
            #     cursor.execute(insert_query)
            #     mysql.connection.commit()
            #     cursor.close()
            # except Exception as e:
                
            #     print('invalid creadentionals',e)
            #     return render_template('register.html',exception ='wrong credentials')
            # return redirect(url_for('login'))
        
     

        #     cursor = mysql.connection.cursor()
        #     insert_query = """
        #         INSERT INTO users 
        #         (user_name, user_password, user_contact, user_email, user_pan_no, user_aadhar_no, 
        #         permanent_addr, permanent_city, permanent_taluka, state, permanent_district, age, 
        #         driving_license_photo, user_photo) 
        #         VALUES 
        #         (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        #     """
        #     cursor.execute(insert_query, (user_name, user_password, user_contact, user_email, user_pan_no,
        #                                   user_aadhar_no, permanent_addr, permanent_city, permanent_taluka,
        #                                   state, permanent_district, age, driving_license_photo, user_photo))
        #     mysql.connection.commit()
        #     cursor.close()
        # except Exception as e:
        #     print('Error:', e)
        #     return render_template('register.html', exception='Invalid credentials')
        
        # return redirect(url_for('login'))