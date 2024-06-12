export const createPages = async ({ actions }) => {
    const { createRedirect } = actions;

    createRedirect({
        fromPath: `/open-banking/pay-by-bank/callback`,
        toPath: `/about-me`,
    });
};
