/**
 * @description This query will scan all code to check for empty if statement blocks
 * @id Custom If Stmt Check
 * @kind problem
 * @problem.severity warning
 */

import javascript

from IfStmt ifstmt, Block block
where
block = ifstmt.getThen() and block.getNumStmt() = 0
select ifstmt, "This if statement has an empty then block"