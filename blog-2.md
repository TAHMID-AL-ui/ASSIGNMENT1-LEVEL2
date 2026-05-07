# How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## Introduction

In TypeScript, developers often work with large interfaces that contain many properties. Sometimes we only need a few properties from that interface, or we may want to remove some properties for a different purpose. Writing new interfaces again and again can create duplicate code. TypeScript provides utility types like `Pick` and `Omit` to solve this problem and keep code DRY, which means “Don’t Repeat Yourself.”

## Body

The `Pick` utility type allows developers to select only specific properties from an existing interface. This helps create smaller and more specialized versions of a larger interface without rewriting code.

Example from my code:

```ts
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
```

Using `Pick`, we can create a smaller version of this interface:

```ts
type BookPreview = Pick<Book, "title" | "author">;
```

This new type will only contain:

- `title`
- `author`

Similarly, the `Omit` utility type removes specific properties from an interface.

Example:

```ts
type BookWithoutYear = Omit<Book, "publishedYear">;
```

This creates a new type without the `publishedYear` property.

These utility types help developers avoid repeating the same code multiple times. Instead of creating many similar interfaces manually, developers can reuse existing interfaces and modify them when needed.

The `Book` interface from my assignment is a good example of a master interface that can be reused in different situations.

```ts
const toggleReadStatus = (book: Book) => {
  return {
    title: book.title,
    author: book.author,
    publishedYear: book.publishedYear,
    isRead: true,
  };
};
```

This keeps the code cleaner and more maintainable.

## Conclusion

`Pick` and `Omit` are useful TypeScript utility types that help developers reduce duplicate code and create reusable data structures. They make code easier to manage, improve readability, and support the DRY principle. Using these utility types is a smart way to build clean and scalable TypeScript applications.