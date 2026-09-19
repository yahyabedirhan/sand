import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "sand/ui/questionnaire";

<Questionnaire onSubmit={(event) => event.preventDefault()}>
  <QuestionnaireItem name="role">
    <QuestionnaireTitle>What is your role?</QuestionnaireTitle>
    <QuestionnaireDescription>
      Pick one to continue.
    </QuestionnaireDescription>
    <QuestionnaireChoices>
      <QuestionnaireChoice value="design">Design</QuestionnaireChoice>
      <QuestionnaireChoice value="engineering">
        Engineering
      </QuestionnaireChoice>
    </QuestionnaireChoices>
    <QuestionnaireActions>
      <QuestionnaireSubmit />
    </QuestionnaireActions>
  </QuestionnaireItem>
</Questionnaire>`;

function QuestionnaireDemo() {
  return (
    <Questionnaire
      className="max-w-sm"
      onSubmit={(event) => event.preventDefault()}
    >
      <QuestionnaireItem name="role">
        <QuestionnaireTitle>What is your role?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Pick one to continue.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="design">Design</QuestionnaireChoice>
          <QuestionnaireChoice value="engineering">
            Engineering
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireActions>
          <QuestionnaireSubmit />
        </QuestionnaireActions>
      </QuestionnaireItem>
    </Questionnaire>
  );
}

export function QuestionnairePage() {
  return (
    <ComponentPage
      title="Questionnaire"
      lead="Walks through a short sequence of questions."
      demo={<QuestionnaireDemo />}
      code={code}
      sections={[
        {
          id: "accessibility",
          title: "Accessibility",
          children: (
            <p className="text-body text-muted-foreground">
              Give every <InlineCode>QuestionnaireItem</InlineCode> a{" "}
              <InlineCode>name</InlineCode>. The title is the legend for that
              fieldset, and each <InlineCode>QuestionnaireChoice</InlineCode>{" "}
              needs a <InlineCode>value</InlineCode>.
            </p>
          ),
        },
      ]}
    />
  );
}
