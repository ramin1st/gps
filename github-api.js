async function saveModuleStatus(online) {
    const statusData = {
        message: "Update module status",
        content: btoa(JSON.stringify({ online }))
    };

    await fetch("https://api.github.com/repos/YOUR_GITHUB_USER/YOUR_REPO/contents/status.json", {
        method: "PUT",
        headers: { Authorization: `token YOUR_GITHUB_TOKEN`, "Content-Type": "application/json" },
        body: JSON.stringify(statusData)
    });
}

// نمونه ذخیره وضعیت آنلاین بودن ماژول
saveModuleStatus(true);