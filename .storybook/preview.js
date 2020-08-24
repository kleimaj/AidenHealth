import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { contexts } from './context';
import anysort from 'anysort'

addParameters({
    backgrounds: [
        {name: "Default theme", value: "#ffffff", default: true},
        {name: "Dark theme", value: "#050449"}
    ],
    options: {
        showRoots: true,
        storySort: (previous, next) => {
            const [previousStory, previousMeta] = previous
            const [nextStory, nextMeta] = next
      
            return anysort(previousMeta.kind, nextMeta.kind, [
              'Design System/*',
              'Components/*',
              'Foundation/*'
            ])
          }
    }
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);