import React from "react"


function ExpandedCard() {
    return (
      <>
      <div class="card">
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="https://picsum.photos/1500/1500" alt="Placeholder image"/>
             </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-5">Roasted black bean burgers</p>
              </div>
            </div>
              <div class="content">
                Serves 1 <br/>
                Prep time: 5 Mins
              </div>
              <div class="ingredients">
                Ingredients needed:<br/><br/>
              '1½ red onions',<br/>
        '100 g rye bread',<br/>
        'ground coriander',<br/>
        '1 x 400 g tin of black beans',<br/>
        'olive oil',<br/>
              </div>
              <div class="Method">
              <br/>Method:<br/><br/>
              'Preheat the oven to 190°C/375°F/gas 5.',<br/>
        'Melt 50g of the butter in a pan and whisk in the flour. Cook for 1 to 2 minutes, then whisk in the milk till smooth. Season with sea salt and freshly ground black pepper, add the bay leaf and simmer for 5 minutes. Turn off the heat.',<br/>
        'Remove the stalks from the spinach, then wilt with the remaining 20g butter in a covered pan. When wilted, drain, then, when cool enough to handle, squeeze out the liquid.',<br/>
              </div>
          </div>
      </div>
    </>
      );
    }

    export default ExpandedCard