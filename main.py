from flask import Flask, request, send_from_directory
import paypalrestsdk
import json
# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

@app.route('/')
def send_js():
    return send_from_directory('static', 'index.html')

if __name__ == "__main__":
    app.run()

@app.route('/paypal')
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