import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "terminal-icon" is now active!');

	let toggle = vscode.commands.registerCommand('terminal.toggle', () => {
		vscode.commands.executeCommand("workbench.action.togglePanel");
	});
	context.subscriptions.push(toggle);

	let toggleTerminalStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	toggleTerminalStatusBarItem.command = "terminal.toggle";
	toggleTerminalStatusBarItem.text = " $(terminal) ";
	toggleTerminalStatusBarItem.tooltip = "Toggle Integrated Terminal";
	toggleTerminalStatusBarItem.show();
}

export function deactivate() {}
