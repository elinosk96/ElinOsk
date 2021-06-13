import './Card.css'

const NewBill = () => {
    return <div className="col-sm-12 col-md-6 col-lg-3 CardContianer"><div class="CardBox"><h3>--- Bills ---</h3></div></div>
    
}

export default NewBill

<div>
    <div className="col-sm-12 col-md-6 col-lg-3 CardContianer">
<div class="CardBox">
<h3>--- Bills ---</h3>
<form action="">
<label for="">Description:</label>
<input type="text">
<label for="">Amount:</label>
<input type="number">
<label for="">Date:</label>
<select name="cars" id="Day">
<option value="volvo">01</option>
</select>
<select name="cars" id="Month">
<option value="volvo">August</option>
</select>
<select name="cars" id="Year">
<option value="volvo">2021</option>
</select>
<button>Add</button>
</form>
</div>
</div>
</div>