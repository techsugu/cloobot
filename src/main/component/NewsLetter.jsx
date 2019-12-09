import React from "react";

class NewsLetter extends React.Component {
    constructor() {
        this.state = {
            phone_number: ""
        };
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <label className="label">Leave your Number</label>
                    <input type="number" name="phone_number" className="form-control" />
                </div>
                <button className="btn btn-default">Send</button>
            </form>
        )
    }
}

export default NewsLetter;