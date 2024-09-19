# README: Managing Your Website Data

## Introduction

This guide will help you manage the contents of your website by editing the `data.json` file. Specifically, we'll cover how to add or edit fitness plans and client transformations. This file controls the data displayed on your website.

### Accessing the Data File

1. **Locate `data.json`**: Find the `data.json` file in your project's root directory. This file contains all the data your website uses.

2. **Open the File**: Use a text editor (like Notepad, TextEdit, or any code editor) to open the `data.json` file.

---

## Adding/Editing Fitness Plans

### Understanding the Structure

Here’s how a fitness plan is structured in `data.json`:

```json
"plans": {
  "id": "class",
  "background_image": "./assets/images/classes-bg.png",
  "subtitle": "Plans",
  "title": "Fitness Plans For Every Goal",
  "packages": [
    {
      "name": "Basic Package",
      "image": "./assets/images/class-1.jpg",
      "description": "Includes a custom weekly workout plan and limited access to trainer (e.g., weekly check-ins via email/text).",
      "price": "$55.00/mo"
    },
    {
      "name": "Standard Package",
      "image": "./assets/images/class-2.jpg",
      "description": "Includes weekly workout plan, nutrition guidance, and regular check-ins with trainers (via calls, emails, text, or video).",
      "price": "$75.00/mo"
    },
    {
      "name": "Premium Package",
      "image": "./assets/images/class-3.jpg",
      "description": "Includes customized weekly workout plan, nutrition plan, unlimited support, live virtual sessions, and personalized feedback.",
      "price": "$95.00/mo"
    }
  ]
}
```

### Adding a New Plan

1. **Find the `packages` Section**: This is where all your plans are listed.
2. **Add a New Plan**: Insert a new object into the `packages` array with the following fields:
   - `name`: The name of the new plan.
   - `image`: Path to the image for the new plan.
   - `description`: Description of what the plan includes.
   - `price`: Cost of the plan.

   Example:
   ```json
   {
     "name": "New Package",
     "image": "./assets/images/new-class.jpg",
     "description": "Description of the new package.",
     "price": "$99.00/mo"
   }
   ```

3. **Save Your Changes**: After adding the new plan, save the file.

### Editing an Existing Plan

1. **Locate the Plan**: Find the plan you want to edit within the `packages` array.
2. **Update Fields**: Change the `name`, `image`, `description`, or `price` as needed.
3. **Save Your Changes**: After editing, save the file.

---

## Adding/Editing Client Transformations

### Understanding the Structure

Here’s how a transformation is structured in `data.json`:

```json
"transformations": {
  "id": "transformations",
  "subtitle": "Transformations",
  "title": "Witness The Progress",
  "items": [
    {
      "before_image": "./assets/images/transformations/image.jpg",
      "after_image": "./assets/images/transformations/image.jpg",
      "title": "Client Transformation",
      "description": "[Short Description Here]"
    },
    {
      "before_image": "./assets/images/transformations/image.jpg",
      "after_image": "./assets/images/transformations/image.jpg",
      "title": "Client Transformation",
      "description": "[Short Description Here]"
    }
  ]
}
```

### Adding a New Transformation

1. **Find the `items` Section**: This is where all your transformations are listed.
2. **Add a New Transformation**: Insert a new object into the `items` array with the following fields:
   - `before_image`: Path to the image showing before the transformation.
   - `after_image`: Path to the image showing after the transformation.
   - `title`: Title of the transformation.
   - `description`: A short description of the transformation.

   Example:
   ```json
   {
     "before_image": "./assets/images/transformations/new-before.jpg",
     "after_image": "./assets/images/transformations/new-after.jpg",
     "title": "New Transformation",
     "description": "Description of the new transformation."
   }
   ```

3. **Save Your Changes**: After adding the new transformation, save the file.

### Editing an Existing Transformation

1. **Locate the Transformation**: Find the transformation you want to edit within the `items` array.
2. **Update Fields**: Change the `before_image`, `after_image`, `title`, or `description` as needed.
3. **Save Your Changes**: After editing, save the file.

---

## Summary

- **To Add Plans/Transformations**: Insert new objects into the `packages` or `items` array respectively.
- **To Edit Plans/Transformations**: Modify the existing objects within these arrays.
- **Always Save**: Don’t forget to save the `data.json` file after making changes.