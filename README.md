# Autocomplete with AJAX

To run the project, first make a `.env.local` file with the configuration of your database, then:

    composer install
    yarn install
    yarn encore dev

Create the database if needed with:

    symfony console doctrine:database:create
    symfony console doctrine:migrations:migrate

Seed the database if needed with:

    symfony console doctrine:fixtures:load

Run the server:

    symfony server:start

Now open the homepage: you can see a search input inside the navigation bar.
Try it: it works well, but you can improve it with autocomplete.

# Server side

Take a look at `ProgramController::autocomplete`: the action should return a search result, but through JSON instead of a rendered Twig template.
You can look at `ProgramController::search` to help you.

You can test your code through this url: http://127.0.0.1/programs/autocomplete?q=fear

# Client side

Edit `assets/autocomplete.js`, and add the needed code to fetch the server when the input value changes.

Modify DOM to add results in a list just below the search bar (use the `<ul id="autocomplete">`).

Remember to clean everything if the input value is empty ;)
