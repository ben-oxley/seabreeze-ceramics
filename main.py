from flask import Flask, request, send_from_directory, jsonify, render_template, request
import paypalrestsdk
import json
# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

@app.route('/')
def send_js():
    return send_from_directory('static', 'index.html')

if __name__ == "__main__":
    app.run()

@app.route('/paypalexample')
def pull_payments():
	paypalrestsdk.configure({
	  "mode": "sandbox", # sandbox or live
	  "client_id": "EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM",
	  "client_secret": "EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM" })
	payment = paypalrestsdk.Payment.find("PAY-57363176S1057143SKE2HO3A")

	# Get List of Payments
	payment_history = paypalrestsdk.Payment.all({"count": 10})
	payment_history.payments
	newStringOfResults = ""
	for paymentEntry in payment_history.payments:
		newStringOfResults+= str(paymentEntry.payer.payment_method)
		newStringOfResults+= str(paymentEntry.payer.payer_info)
		# newStringOfResults+= " "+str(paymentEntry.payer.payer_info.last_name)
		# newStringOfResults += "<br>"
		# newStringOfResults += str(paymentEntry.payer.payer_info.shipping_address.line1)
		# newStringOfResults += str(paymentEntry.payer.payer_info.shipping_address.postal_code)
		newStringOfResults += "<br>"	
	return newStringOfResults

@app.route('/paypalpayments')
def getAllPayments():
	paypalrestsdk.configure({
	  "mode": "sandbox", # sandbox or live
	  "client_id": "EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM",
	  "client_secret": "EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM" })
	payment = paypalrestsdk.Payment.find("PAY-57363176S1057143SKE2HO3A")

	# Get List of Payments
	payment_history = paypalrestsdk.Payment.all({"count": 10})
	return str(payment_history.payments)

@app.route('/paypal/')
def showPayments():
	return render_template('paypal.html')

@app.route('/_add_numbers')
def add_numbers():
    a = request.args.get('a', 0, type=int)
    b = request.args.get('b', 0, type=int)
    return jsonify(result=a + b)
