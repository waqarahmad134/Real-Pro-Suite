SET
    SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET
    AUTOCOMMIT = 0;

START TRANSACTION;

SET
    time_zone = "+00:00";

-- Dumping Data into user Types
INSERT INTO
    `usertypes` (`id`, `name`, `createdAt`, `updatedAt`)
VALUES
    (
        1,
        'Franchise Owner/Administrator',
        '2022-07-04 17:21:11',
        '2022-07-04 17:21:11'
    ),
    (
        2,
        'Office Manager',
        '2022-07-04 17:21:11',
        '2022-07-04 17:21:11'
    ),
    (
        3,
        'user',
        '2022-07-04 17:21:11',
        '2022-07-04 17:21:11'
    ),
    (
        4,
        'Marketing Specialist',
        '2022-07-04 17:21:11',
        '2022-07-04 17:21:11'
    );
    (
        4,
        'IT Support',
        '2022-07-04 17:21:11',
        '2022-07-04 17:21:11'
    );
    (
        4,
        'Financial Analyst',
        '2022-07-04 17:21:11',
        '2022-07-04 17:21:11'
    );
    (
        4,
        'HR Manager',
        '2022-07-04 17:21:11',
        '2022-07-04 17:21:11'
    );

INSERT INTO
    `links` (
        `id`,
        `title`,
        `key`,
        `link`,
        `status`,
        `createdAt`,
        `updatedAt`
    )
VALUES
    (
        1,
        'Privacy Policy',
        'privacyPolicy',
        'https://trim.com/privacy.html',
        1,
        '2023-02-15 15:26:52',
        '2023-02-15 15:26:52'
    ),
    (
        2,
        'FAQs',
        'FAQ',
        'https://trim.com',
        1,
        '2023-02-15 15:26:52',
        '2023-02-15 15:26:52'
    );

--
-- Dumping data for table `supports`
--
INSERT INTO
    `supports` (
        `id`,
        `title`,
        `key`,
        `value`,
        `status`,
        `createdAt`,
        `updatedAt`
    )
VALUES
    (
        1,
        'email',
        'support_email',
        'support@gmail.com',
        1,
        '2023-02-06 10:51:06',
        '2023-04-13 10:42:30'
    ),
    (
        2,
        'phone',
        'support_phone',
        '+923117860111',
        1,
        '2023-02-06 10:51:06',
        '2023-03-01 11:30:24'
    );


    (
        1,
        'Commission',
        '2023-02-06 10:51:06',
        '2023-04-13 10:42:30'
    ),
    (
        2,
        'Fixed Salary (per month)',
        '2023-02-06 10:51:06',
        '2023-04-13 10:42:30'
    ),
    (
        3,
        'Rent a chair',
        '2023-02-06 10:51:06',
        '2023-04-13 10:42:30'
    );

    -- seeders
    COMMIT;