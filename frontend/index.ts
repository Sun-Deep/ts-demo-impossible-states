enum PageState {
  Loading,
  Success,
  Error,
}

interface PageLoading {
  type: PageState.Loading;
}

interface PageContent {
  type: PageState.Success;
  title: string;
  body: string;
}

interface PageError {
  type: PageState.Error;
  code: number;
  name: string;
  description: string;
}

type Page = PageLoading | PageContent | PageError;

// const model: Page = { type: PageState.Loading };

const model: Page = { type: PageState.Success, title: "Hello", body: "There" };

// const model: Page = {
//   type: PageState.Error,
//   code: 400,
//   name: "Hello",
//   description: "There",
// };

console.log(getContent(model));

function getContent(model: Page): string {
  switch (model.type) {
    case PageState.Loading: {
      return "Loading...";
    }
    case PageState.Success: {
      return `title: ${model.title}, body: ${model.body}`;
    }
    case PageState.Error: {
      return `Error! code: ${model.code}, name: ${model.name}, description: ${model.description}`;
    }
    default: {
      return assertNever(model);
    }
  }
}

function assertNever(_x: never): never {
  throw new Error("Unexpected value. Should have been never.");
}
