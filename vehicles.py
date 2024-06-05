def vehicle_routes(app, render_template, request, mysql, redirect, url_for):
    # add cars page
    @app.route('/add_vehicle', methods=['POST', 'GET'])
    def add_vehicle():
        if request.method == 'GET':
            # Connect to the database
            cursor = mysql.connection.cursor()

            # Fetch vehicle categories from the database
            cursor.execute("SELECT vehicle_category_name FROM vehicle_categories")
            categories = cursor.fetchall()

            # Close the connection
            cursor.close()

            return render_template('add_vehicle.html', categories=categories)

        # if request.method == 'POST':
        #     print("hi")


        #     # Get form data
        #     vehicle_category = request.form['vehicle_category']
        #     vehicle_type = request.form['vehicle_type']
        #     gear_type = request.form['gear_type']
        #     vehicle_info = request.form['vehicle_info']
        #     license_number = request.form['license_number']
        #     deposit_amount = request.form['deposit_amount']
        #     rent_per_hour = request.form['rent_per_hour']
        #     preferred_location = request.form['preferred_location']

        # print(vehicle_category)
        # return
             
