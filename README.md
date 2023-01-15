# Bug Tracker
This Bug Tracker application is designed to allow users to manage and track issues found in multiple jobs and assign people to specific tasks. 

## Description
There are two tabs in the navigational tool bar: Projects, and Users. Projects is where most of the application lives, new projects can be added, tickets can be created and users can be assigned to each project. The Users tab is where team members can be added so they can later be assigned to various tickets. Each user can be selected to see various stats about how many tickets have been completed and how many are currently in progress.

## Installation
1. **Copy the repository:** 
```
git@github.com:lbarsis/bug-tracker.git
```
2. **Open up the terminal and clone the repository into the desired directory using:**
```
git clone git@github.com:lbarsis/bug-tracker.git
```
3. **Install bundles** 
```
bundle install
```
4. **Install npm** 
```
npm install
```
5. **Start Server** 
```
bundle exec rake server
```
6. **Run application using:** 
```
npm start
```

## Usage
1. **Navigate to the hompage**
Here will be a brief description on how the application can be used. It is recommended this page is reviewed prior to starting. The descriptions of each page here will give a summary of how they can be used together.

2. **Navigate to the Add Item page**
Going directly to the Inventory page will only show you a header because no items have been added at the start of the application. The Add Item page allows users to add items and get their inventory started. This page consists of a single form with eight input fields: Category, Name, Vendor, Description, Status, Flag Amount, On Hand, Unit of Measure.

### Category
The Category input is the set or group that an item can belong to. For example, if you were inventorying cars and wanted to group them by manufacturer, you could select Ford for all ford models or Toyota for all Toyota models. When the application is initially opened there will not be any categories to choose from. This is because the user is responsible for creating their own categories based on specific needs. 

To add a category to the list, simply select 'Other' from the drop down menu. A new field will appear that will allow an input to be typed. Type any string into this field and continue to the 'Name' field. *As of right now, there is no way to delete a category once it has been added except through modifying the db.json file*

After all the fields are input and the item is submitted, this category will be available from the drop down menu.

### Name
The name of the item.

### Vendor
Vendor is the location or manufacturer that the item is purchased from.

### Description
Description is used to explain what the item is and how it is used in specific applications.

### Status
Status is used to denote the current state the item is in. Example: if an item is fully stocked, the user could write 'In Stock' in the field. If the item is low or out, 'Out of Stock' could be input, or 'On Order' if the item has already been ordered. 

### Flag Amount
The Flag Amount is the point at which the application should notify you that the quantity of stock is at it's lowest point. If you always need to have 5 of an specific item and the storage drops to 5 or lower, then the item will be flagged for reorder.

### On Hand
The On Hand amount is the current stock available for a specific item.

### UoM (Unit of Measure)
Unit of measure is the way an item is counted. String can be counted in linear feet or 'LF', pens will most likely be counted in boxes or 'BOX' and larger items could potentially be listed as each or 'EA'.

## Examples
![Example](./images/video1765546443.gif)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.