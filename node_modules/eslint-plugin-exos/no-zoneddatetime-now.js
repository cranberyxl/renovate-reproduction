// Avoid using ZonedDateTime.now() in tests
module.exports = {
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.name === 'ZonedDateTime' &&
          node.callee.property.name === 'now'
        ) {
          context.report({
            node,
            message:
              'use joda.ZonedDateTime.soon or joda.ZonedDateTime.recent from /src/testUtils/factory/misc.ts',
          });
        }
      },
    };
  },
};
