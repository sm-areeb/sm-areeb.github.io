export default function Form() {
  return (
    <div className="form">
      <div className="field">
        <label className="label">Package Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter package name"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Package Description"
          ></textarea>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Duration</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Number of days"
                min={1}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="file has-name is-boxed">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                multiple
                name="photos"
              />
              <span className="file-cta">
                <span className="file-icon">&#128206;</span>
                <span className="file-label">Select Photos(multiple)</span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Original Price $</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Enter price"
                min={0}
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Discounted Price $</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Enter price"
                min={0}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Starting point</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Origin location"
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Destinations</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Locations seperated by comma's"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Booking Date</label>
              <div className="control">
                <input
                  className="input"
                  type="date"
                  placeholder="Booking date"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Booking slots</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Enter available slots"
                  min={1}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="buttons has-addons">
          <button class="button is-success">Add</button>
          <button class="button is-danger">Remove</button>
        </div>
      </div>
      <h4 className="subtitle has-text-weight-bold my-4">Itinerary</h4>
      <div className="box">
        <h4 className="subtitle has-text-weight-bold my-4">Day 1</h4>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Time</label>
              <div className="control">
                <input
                  className="input"
                  type="time"
                  placeholder="Activity time"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Activity</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter the activity"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="buttons has-addons">
          <button class="button is-success">Add</button>
          <button class="button is-danger">Remove</button>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </div>
  );
}
